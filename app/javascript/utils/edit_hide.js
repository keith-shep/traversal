

const hideEditForm = () => {
  const Form = Document.getElementbyId("post_link");

  const callback = () => {
    console.log("Hi I'm doing fine!");
  }

  Form.addEventListener("click", callback)

}

export { hideEditForm };
