

const hideEditForm = () => {

  const postLinks = document.querySelectorAll(".post_link");

  const callback = (e) => {
    e.preventDefault();
    const equationId = e.currentTarget.dataset.equation;
    const editForm = document.getElementById(`edit-equation-${equationId}`);
    editForm.classList.toggle('d-none');
  }

  postLinks.forEach((postLink) => {
    postLink.addEventListener("click", callback);
  });


}

export { hideEditForm };
