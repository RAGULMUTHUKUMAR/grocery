import { TbTruckDelivery } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import SectionHeading from "../../../shared/components/SectionHeading";

function ServiceHighlights() {
  const serviceItems = [
    {
      icon: <TbTruckDelivery />,
      title: "Lightning Delivery",
      detail: "Fresh groceries delivered in under 30 minutes."
    },
    {
      icon: <LiaCertificateSolid />,
      title: "Trusted Quality",
      detail: "Certified produce and daily quality checks."
    },
    {
      icon: <IoTicketSharp />,
      title: "Smart Deals",
      detail: "Exclusive bundles and member-only discounts."
    },
    {
      icon: <FaRecycle />,
      title: "Eco Packaging",
      detail: "Reusable bags and reduced plastic footprint."
    }
  ];

  return (
    <section className="section shell service-section" id="offers">
      <SectionHeading
        eyebrow="Why GreenBasket"
        title="Built For Modern Grocery Shopping"
        description="Fast delivery matters, but consistency matters more. These service standards keep the experience reliable."
      />
      <div className="service-grid">
        {serviceItems.map((item) => (
          <article className="service-card" key={item.title}>
            <span className="service-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceHighlights;
