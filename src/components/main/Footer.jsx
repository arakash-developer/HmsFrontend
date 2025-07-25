const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <div
        className="main-content transition-all flex flex-col overflow-hidden"
        id="main-content"
      >
        <footer className="bg-white dark:bg-[#0c1427] rounded-t-md px-[20px] md:px-[25px] py-[15px] md:py-[20px] text-center">
          <p>
            © <span className="text-purple-500">Trezo</span> is Proudly Owned by{" "}
            <a
              href="https://envytheme.com/"
              target="_blank"
              className="text-primary-500 transition-all hover:underline"
            >
              EnvyTheme
            </a>
          </p>
        </footer>
      </div>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
