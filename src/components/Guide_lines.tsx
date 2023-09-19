import { useState } from "react";

interface Guide {
  title: string;
  description: string;
}

const Guidelines = () => {
  const [guidelines] = useState<Guide[]>([
    {
      title: "Team: 6 Students(1 Girl) - Unique Skills",
      description:
        "Assemble a team of 6 students one being a girl compulsorily from your educational institution with each member bringing their unique skills and expertise and get yourself. ",
    },
    {
      title: "Aligning Skills with Government Problems",
      description:
        "Browse the problem statements provided by various government departments and organizations and select a problem statement that aligns with your team's skills and interests.",
    },
    {
      title: "Problem Solving Commitment Registered",
      description:
        "Once you've made your choice, register your team's intent to solve that specific problem statement.",
    },
    {
      title: "Internal Hackathons: Varied Structures, Comfort Zones",
      description:
        "The SIH journey kicks off with internal hackathons, which can vary in structure from college to college and confines to your comfort.",
    },
    {
      title: "SIH Launchpad: Idea Review & Team Nomination",
      description:
        "The initial stage is a  launchpad for one's SIH journey  which is hosted inside the institution where many teams participate and ideas proposed by teams are reviewed by a panel of judges and most promising ideas proceed to the main hackathon event are qualified.The college SPOC will be responsible to nominate the top 35 teams as per the internal hackathon results.",
    },
    {
      title: "Problem Statements to Organizations: Real Competition Begins",
      description:
        "In the next stage the problem statements, the very heart of SIH, are sent to their respective organizations. This is where your innovation meets real-world challenges and real competition begins.",
    },
    {
      title: "SIH Finale: Cream of the Crop, Real-World Convergence",
      description:
        "For the finale beckons out of the numerous teams across the nation, only around 4 to 5 teams per problem statement are chosen. These selected teams become the cream of the crop, the contenders for the grand finale. The finale isn't virtual ,the grand finale is held offline at various nodal centers scattered across India it's the time when your digital journey converges into a real-world gathering. Several teams gather with palpable excitement and infectious energy and present their solution in person, face to face with the organizations that posed the challenges.",
    },
  ]);

  return (
    <div className="guideline">
      <div className="guideHeading">Guidelines</div>
      <ol className="guideDesc">
        {guidelines.map((guide, index) => (
          <li key={index}>
            <div className="guideTitle">{guide.title}:</div>{" "}
            <span className="guideDescription">{guide.description}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Guidelines;
