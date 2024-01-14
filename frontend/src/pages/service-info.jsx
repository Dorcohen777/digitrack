import ServiceImg from '../assets/img/service-info.jpg'

export function ServiceInfo() {
    return (
        <section className="service-info-container flex align-center ">
            <div className="service-text-container">
                <h2 className="fs28">How it work?</h2>
                <p className="fs20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sunt. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="service-info-img-container">
            <img src={ServiceImg} className='service-info-img'/>
            </div>
        </section>
    )
}