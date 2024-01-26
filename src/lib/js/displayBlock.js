export function displayBlock(htmlElement) {

  if (htmlElement.style.display == "block") {

    htmlElement.style.display = "none";
    console.log("Element hide")

  } else {

    htmlElement.style.display = "block";
    console.log("Element displayed")

  }

}