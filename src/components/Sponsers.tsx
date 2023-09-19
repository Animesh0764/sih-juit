export const Sponsers = () => {
  const sponsor = [
    {
      img: "https://placehold.co/300x400",
      title: "image 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea ut atque, dicta obcaecati inventore et voluptatum quae! Aliquid illum maiores repellat id eum dolor quis doloribus perspiciatis reprehenderit ratione.",
    },
    {
      img: "https://placehold.co/300x400",
      title: "image 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea ut atque, dicta obcaecati inventore et voluptatum quae! Aliquid illum maiores repellat id eum dolor quis doloribus perspiciatis reprehenderit ratione.",
    },
  ];

  const SponserCard = () => {
    return (
      <section>
        {sponsor.map((spon) => {
          return <Sponser {...spon} />;
        })}
      </section>
    );
  };

  const Sponser: React.FC<{ img: string; title: string; desc: string }> = ({
    img,
    title,
    desc,
  }) => {
    return (
      <article className="Sponser" id='sponsors'>
        <img src={img} alt={title} />
        <h5>{desc}</h5>
      </article>
    );
  };

  return (
    <div>
      <SponserCard />
    </div>
  );
};

export default Sponsers;
