export default function Map() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9643979779016!2d136.02219517555383!3d35.1075998727779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60017755f53a5eb1%3A0x7d65cfe495b310b0!2sYG%20auto!5e0!3m2!1sen!2sjp!4v1773384259006!5m2!1sen!2sjp";
  return (
    <div className=" w-60%  md:w-full h-[200px] md:h-[500px] md:mt-3 md:mt-10 mx-auto">
      <iframe
        title="google-map"
        src={mapSrc}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
