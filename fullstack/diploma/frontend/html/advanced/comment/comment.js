document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comment-form");
  const commentsContainer = document.getElementById("comments-container");

  form.addEventListener("submit", handleSubmit);
  loadComments();

  async function handleSubmit(event) {
    event.preventDefault();

    const name = form.elements["name"].value.trim() || "Anónimo";
    const comment = form.elements["comment"].value.trim();

    if (!comment) {
      alert("Por favor, escribí un comentario.");
      return;
    }

    const newComment = createComment(name, comment);

    try {
      const comments = await fetchComments();
      comments.push(newComment);
      await saveComments(comments);
      addCommentToDOM(newComment, true);
      form.reset();
    } catch (error) {
      console.error("Error guardando comentario:", error);
      alert("No se pudo guardar el comentario.");
    }
  }

  async function loadComments() {
    try {
      const comments = await fetchComments();
      commentsContainer.innerHTML = "";
      comments.forEach(addCommentToDOM);
    } catch (error) {
      console.error("Error cargando comentarios:", error);
      commentsContainer.innerHTML = `<p>No se pudieron cargar los comentarios.</p>`;
    }
  }

  function createComment(name, comment) {
    return {
      id: crypto.randomUUID(),
      name,
      comment,
      date: new Date().toISOString()
    };
  }

  async function fetchComments() {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.BIN_ID}/latest`, {
      headers: { "X-Master-Key": CONFIG.API_KEY }
    });
    if (!response.ok) throw new Error("Error al obtener comentarios");
    const data = await response.json();
    return Array.isArray(data.record?.comments) ? data.record.comments : [];
  }

  async function saveComments(comments) {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": CONFIG.API_KEY,
        "X-Bin-Private": "false"
      },
      body: JSON.stringify({ comments })
    });
    if (!response.ok) throw new Error("Error al guardar comentarios");
  }

  function addCommentToDOM({ id, name, comment, date }, scroll = false) {
    const div = document.createElement("div");
    div.className = "comment-box";
    div.dataset.id = id;

    const formattedDate = new Date(date).toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short"
    });

    div.innerHTML = `
      <strong>${escapeHtml(name)}</strong> <small>${formattedDate}</small>
      <button class="delete-btn" title="Eliminar comentario">🗑️</button>
      <p>${escapeHtml(comment)}</p>
    `;

    commentsContainer.appendChild(div);

    // Evento para eliminar comentario
    div.querySelector(".delete-btn").addEventListener("click", async () => {
      try {
        let comments = await fetchComments();
        comments = comments.filter(c => c.id !== id);
        await saveComments(comments);
        div.remove();
      } catch (error) {
        console.error("Error eliminando comentario:", error);
        alert("No se pudo eliminar el comentario.");
      }
    });

    if (scroll) div.scrollIntoView({ behavior: "smooth" });
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
});
