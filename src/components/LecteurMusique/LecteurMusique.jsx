
const LecteurMusique = () => {

    const lecteur = document.getElementById(lecteur)
  return(
    <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
  )
}

export default LecteurMusique;