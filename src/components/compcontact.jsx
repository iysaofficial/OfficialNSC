import React from "react";

const compcontact = () => {
  return (
    <section className="contact-section py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase mb-5">Hubungi Kami</h2>
        </div>
        <form
          action="https://formspree.io/f/xleqbela"
          method="POST"
          id="contactForm"
          data-sb-form-api-token="API_TOKEN"
        >
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              {/* Name input */}
              <div class="form-group">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nama Anda *"
                  required
                />
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              {/* Email address input  */}
              <div class="form-group">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Anda *"
                  required
                />
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              {/* Phone number input */}
              <div class="form-group mb-md-0">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon Anda *"
                  required
                />
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            {/* Message input */}
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  placeholder="Pesan Anda *"
                  required
                ></textarea>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">
              Error Mengirim Pesan!
            </div>
          </div>
          {/* Submit Button */}
          <div class="text-center">
            <button
              class="btn btn-xl text-uppercase"
              id="submitButton"
              type="submit"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default compcontact;
