const shareButton = document.querySelectorAll('.tile-share')


async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link') 
    console.log(link)
    try {
       await navigator.clipboard.writeText(link)
       alert("Link Copied" + link)
    } catch (error) {
    console.log(error)        
    }

}
shareButton.forEach(shareButton => shareButton.addEventListener('click',copyText))




const shareButton2 = document.querySelectorAll('.share-button')


async function copyText(f){
    f.preventDefault()
    const link = this.getAttribute('link') 
    console.log(link)
    try {
       await navigator.clipboard.writeText(link)
       alert("Link Copied" + link)
    } catch (error) {
    console.log(error)        
    }

}
shareButton2.forEach(shareButton2 => shareButton2.addEventListener('click',copyText))