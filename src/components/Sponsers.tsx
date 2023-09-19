
export const Sponsers = () => {

    const sponsor = [
        {
            img: '',
            title: '',
            desc: '',
        },
        {
            img: '',
            title: '',
            desc: '',
        },
    ];

    const SponserCard = () => {
        return (
            <section>
                {
                    sponsor.map((spon) => {
                        return (
                          <Sponser {...spon}/>  
                        );
                    })
                }

            </section>
        );
    };

    const Sponser: React.FC<{ img: string; title: string; desc: string }> = ({ img, title, desc }) => {
    return (
        <article className="Sponser">
            <img src={img} alt={title} />
            <h5>{desc}</h5>
        </article>
    );
};


return (
    <div>
        <SponserCard/>
    </div>
)
}

export default Sponsers
