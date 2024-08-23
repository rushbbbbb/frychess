export default function RandImage() {
    const randNumber = Math.floor(Math.random()*(3));
    const allLogos: string[] = ["/logo.png", "/logo2.png", "/logo3.png"];
    return (
        <img id="clickableImage" src={allLogos[randNumber]} class="w-16 h-16"/>
    )
}