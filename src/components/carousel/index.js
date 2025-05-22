import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import { useMentors } from "../../hooks"

const mentors = [
    {
        img: 'mentor1.jpeg',
        name: 'Jefferson Anaya Romero',
        text: 'Process Designer | Procesos | Innovación…'
    },
    {
        img: 'mentor2.jpeg',
        name: 'Martín Pozada Monteza',
        text: 'Brand Manager. Copywriter.'
    },
    {
        img: 'mentor3.jpeg',
        name: 'Daniel Rivera Vernazza',
        text: 'Asistente en Ecobuildnext.'
    }
]

const CarruselAutoplay = () => {
    const { list } = useMentors({})
    const [sliderRef] = useKeenSlider({
            breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
            },
            slides: { 
                perView: 1 
            },
            loop: true,
        },
        [
            (slider) => {
              let timeout
              let mouseOver = false
              function clearNextTimeout() {
                clearTimeout(timeout)
              }
              function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                  slider.next()
                }, 2000)
              }
              slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                  mouseOver = true
                  clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                  mouseOver = false
                  nextTimeout()
                })
                nextTimeout()
              })
              slider.on("dragStarted", clearNextTimeout)
              slider.on("animationEnded", nextTimeout)
              slider.on("updated", nextTimeout)
            },
        ]
    )
    
    return (
        <>
            {(list && list.length) &&(<div ref={sliderRef} className="keen-slider carousel">
                {
                    list.map(mentor => (
                        <div className="keen-slider__slide number-slide">
                            <img className="carousel_img" src={`http://localhost:8001${mentor.photo}`} />
                            <h3 className="carousel_name">{mentor.names}</h3>
                            <p className="carousel_text">{mentor.description}</p>
                        </div>
                    ))
                }
            </div>)}
        </>
    )
}

export default CarruselAutoplay;