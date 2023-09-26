import React from "react";

function About() {
  return (
    <div id="Top" class="page-content">
      <div class="hero for-inner about-page">
        <div class="container">
          <div>
            <div class="relative-div dark">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                loading="lazy"
                sizes="(max-width: 1439px) 90vw, 1200px"
                srcset="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                class="about-photo"
                style={{ opacity: 0.6 }}
              />
              <div class="text-absolute">
                <div>
                  <p class="subhead about-subhead">
                    Get to know the talented and dedicated individuals who make
                    up our startup team.<span class="gray-text white"></span>
                  </p>
                </div>
                <div class="margin-20px">
                  <a
                    href="https://forms.gle/kvkV8xKxqiZ6AXyq9"
                    class="button-arrow-link hide-landscape w-inline-block"
                  >
                    <div class="button-label">
                      <div class="label-button">Work with us</div>
                      <div class="arrow-wrapper">
                        <img
                          src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                          loading="lazy"
                          alt=""
                          class="icon-arrow"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section  wf-section">
        <div class="container">
          
          <div class="margin-80px">
            <div class="max-w-left">
              <div class="tag-top-text">
                <div class="label-text">Reach our support team</div>
              </div>
              <h2 class="display-2"> Meet the team. </h2>
            </div>
            <div class="margin-50px">
            <div class="grid-2-columns for-team">
                <div class="team-wrapper-second">
                  <div class="team-photo"></div>
                  <div>
                    <p class="subhead fourth">
                      Shantanu Bunker
                    </p>
                  </div>
                  <div class="margin-15px">
                    <div class="contact-details-flex vertical">
                      <div class="contact-details">
                        <div>
                          <a
                            href="mailto:contact@company.com"
                            class="contact-link"
                          >
                            shantanubunker.sb@gmail.com
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="tel:(123)456-789" class="contact-link">
                            +91 90986-30635
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="team-wrapper-second">
                  <div class="team-photo member-3"></div>
                  <p class="subhead fourth">
                    Ayush Madhur
                  </p>
                  <div class="margin-15px">
                    <div class="contact-details-flex vertical">
                      <div class="contact-details">
                        <div>
                          <a
                            href="mailto:contact@company.com"
                            class="contact-link"
                          >
                            ayushmadhur6243@gmail.com
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="tel:(123)456-789" class="contact-link">
                            +91 90681-46407
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
