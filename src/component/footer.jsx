export default function Footer() {
  return (
    <div className="font-raleway text-white bg-primary-blue flex flex-wrap justify-start lg:justify-between max-sm:grid w-full min-w-[250px]">
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        className="bg-primary-orange mx-6 w-auto h-fit px-4 py-6 mb-4 my-2 rounded-lg"
      >
        <p className="text-4xl font-semibold mb-4">MYHOTEL</p>
        <div>
          <p>Temukan kembali, ketenangan</p>
          <p>Ini hidupmu.. Nikmati apa yang kamu mau</p>
          <p>Dunia baru, temukan itu</p>
          <p>Pertama, Anda mencintai … kemudian Anda hidup</p>
        </div>
      </div>
      <div
        className="mx-6 my-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex items-center mb-4">
          <p className="font-semibold text-black mr-4">CONTACT</p>
          <div className="h-[1px] w-16 bg-black"></div>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-map-marker-alt me-3"></i>
          <p>Jl. Soekarno-Hatta 2023 Yogyakarta, Indonesia</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-phone-alt me-3"></i>
          <p>+6274 5432 9876</p>
        </div>
        <div className="flex items-center mb-2">
          <i className="fa fa-envelope me-3"></i>
          <p>info@myhotel.yogya.com</p>
        </div>
      </div>
      <div
        className="mx-6 my-2"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <div className="flex items-center mb-4">
          <p className="font-semibold text-black mr-4">COMPANY</p>
          <div className="h-[1px] w-16 bg-black"></div>
        </div>
        <p className="mb-2">
          <a href="#about">About Us</a>
        </p>
        <p className="mb-2">
          <a href="">Privacy Policy</a>
        </p>
        <p className="mb-2">
          <a href="#about">Terns & Condition</a>
        </p>
        <p className="mb-2">
          <a href="#about">Suport</a>
        </p>
      </div>
      <div
        className="mx-6 my-2"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="400"
      >
        <div className="flex items-center mb-4">
          <p className="font-semibold text-black mr-4">SERVICES</p>
          <div className="h-[1px] w-16 bg-black"></div>
        </div>
        <p className="mb-2">Food & Resttaurant</p>
        <p className="mb-2">Spa & Fitness</p>
        <p className="mb-2">Sports & Gaming</p>
        <p className="mb-2">Event & Party</p>
        <p className="mb-2">Gym & Yoga</p>
      </div>
    </div>
  );
}
