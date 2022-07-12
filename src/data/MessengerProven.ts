import ArchitectsEngineers from "../preloader/images/_home/ArchitectsEngineers.svg";
import Cash from "../preloader/images/_home/Cash.svg";
import Homeowners from "../preloader/images/_home/Homeowners.svg";
import User_fill from "../preloader/images/_home/User_fill.svg";

export interface MessageProps {
  img: any;
  title: string;
  text: string;
  id: number;
}

export const message: MessageProps[] = [
  {
    id: 1,
    img: User_fill,
    title: "Real Estate Agents",
    text: "Arm yourself with detailed analytical tools and relevant data to offer the best services for your clients.",
  },
  {
    id: 2,
    img: Cash,
    title: "Investors",
    text: "Enrich your investment decisions with comprehensive information to obtain the highest and best use for your projects.",
  },
  {
    id: 3,
    img: ArchitectsEngineers,
    title: "Architects & Engineers",
    text: "Place messages in existing tags or create new ones. Using tags makes interaction easier.",
  },
  {
    id: 4,
    img: Homeowners,
    title: "Homeowners",
    text: "Whether buying or selling, Buildoptima will help you discover the highest potential for your property. ",
  },
];
