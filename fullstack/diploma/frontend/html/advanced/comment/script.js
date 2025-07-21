
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("comment-form");
	const commentsContainer = document.getElementById("comments-container");

	form.addEventListener("submit", handleFormSubmit);
	loadComments();

	function handleFormSubmit(e) {
		e.preventDefault();
        const name = form.name.value.trim() || "Anónimo";
		const comment = form.comment.value.trim();
		if (!name || !comment) return;

		const newComment = {
			name,
			comment,
			date: new Date().toLocaleString()
		};

		saveComment(newComment);
		addCommentToDOM(newComment);
		form.reset();
	}

	function saveComment(comment) {
		const comments = getComments();
		comments.push(comment);
		localStorage.setItem("comments", JSON.stringify(comments));
	}

	function getComments() {
		return JSON.parse(localStorage.getItem("comments")) || [];
	}

	function loadComments() {
		getComments().forEach(addCommentToDOM);
	}


    function addCommentToDOM({ name, comment, date }) {
        const div = document.createElement("div");
        div.className = "comment-box";

        // Creamos un ID único basado en timestamp + nombre (no perfecto, pero funcional)
        const id = `${name}-${date}`;

        div.setAttribute("data-id", id);
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${name}</strong> <small>${date}</small>
                </div>
                <button class="delete-btn" title="Eliminar comentario">🗑️</button>
            </div>
            <p>${comment}</p>
            <hr>
        `;

        // Agregar al contenedor
        commentsContainer.appendChild(div);

        // Evento para eliminar
        div.querySelector(".delete-btn").addEventListener("click", () => {
            deleteComment(id);
            div.remove(); // eliminar del DOM
        });
    }

    function deleteComment(id) {
        let comments = getComments();
        comments = comments.filter(c => `${c.name}-${c.date}` !== id);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

});

