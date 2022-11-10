import React from 'react';
import { _Store } from '../../../constants/store.constant';
import { useTypedSelector } from '../../../hooks';
const ContactUs: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  if (storeLayout === _Store.type3) {
    return (
      <div className="bg-[#ececec]">
        <div className="container mx-auto py-4 lg:py-6">
          <div className="w-full md:grid md:grid-cols-1 md:gap-6 mb-6">
            <div className="flex justify-center">
              <a href="/" title="">
                <img alt="" src="../images/pk-footer-logo.png" />
              </a>
            </div>
          </div>
          <div className="w-full md:grid md:grid-cols-1 md:gap-6">
            <div className="py-4">
              <div className="w-full text-center text-2xl uppercase font-normal text-black mb-2">
                Connect With us
              </div>
              <div className="w-full text-center text-sm text-black mb-6">
                Join our community ! Stay on top of the latest trends, events.
              </div>
              <ul
                role="list"
                className="mt-2 flex flex-wrap justify-center gap-8 text-3xl mb-10"
              >
                <li className="">
                  <a
                    href="https://www.facebook.com/pkhealthgear/"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true">
                      <span className="sr-only">Facebook</span>
                    </i>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://twitter.com/PKHealthGear"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" aria-hidden="true">
                      <span className="sr-only">Twitter</span>
                    </i>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.linkedin.com/company/health-pk/"
                    title="LinkedIn"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true">
                      <span className="sr-only">LinkedIn</span>
                    </i>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.pinterest.com/pkhealthgear/"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="fab fa-pinterest-p" aria-hidden="true">
                      <span className="sr-only">Pinterest</span>
                    </i>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.instagram.com/pkhealthgear/"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" aria-hidden="true">
                      <span className="sr-only">Instagram</span>
                    </i>
                  </a>
                </li>
              </ul>

              <ul
                role="list"
                className="mt-2 flex flex-wrap justify-center gap-6 text-base"
              >
                <li>
                  <a
                    title="Track your order"
                    href="/"
                    data-toggle="modal"
                    data-target="#myModalac"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    Track your order
                  </a>
                </li>
                <li>
                  <a
                    title="Order Guidelines"
                    href="/OrderGuidelines.html"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    Order Guidelines
                  </a>
                </li>
                <li>
                  <a
                    title="About Us"
                    href="http://www.parsonskellogg.com/"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    title="Measuring Guide"
                    href="/MeasuringGuide.html"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    Measuring Guide
                  </a>
                </li>
                <li style={{ display: 'none' }}>
                  <a
                    title="Decoration Guidelines"
                    href="/Decoration-guide.html"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    Decoration Guidelines
                  </a>
                </li>
                <li>
                  <a
                    title="One Percent For the Planet"
                    href="/patagonia-sustainability-initiatives.html"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    One Percent For the Planet
                  </a>
                </li>
                <li>
                  <a
                    title="Blog"
                    href="https://blog.pkhealthgear.com/"
                    target="_blank"
                    className="font-normal text-anchor hover:text-[#72a84b]"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="mainsection container mx-auto pt-20 pb-20">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-lg md:text-xl lg:text-small-title font-small-title text-center mb-8">
          Our approach as an extension of your brand is to help maintain and
          build your brand equity with the right partners in the corporate
          marketplace.
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-5">
          <div className="w-1/2 md:w-1/3 text-center order-2 md:order-1">
            <div className="bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center">
              <span className="material-icons-outlined text-4xl">chat</span>
            </div>
            <div className="text-base font-semibold uppercase">Chat</div>
          </div>
          <div className="w-full md:w-1/3 text-center order-1 md:order-2">
            <div className="text-base lg:text-2xl font-semibold uppercase">
              Contact Us
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 text-center order-3 md:order-3">
            <div className="bg-[#00ce7c] w-20 h-20 mx-auto mb-2 rounded-full flex items-center justify-center">
              <span className="material-icons text-4xl">phone</span>
            </div>
            <div className="text-base font-semibold uppercase">Call</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
