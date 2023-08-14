export default function Home() {
  return (
    <>
      <a
        className="gem-c-skip-link govuk-skip-link govuk-!-display-none-print"
        data-module="govuk-skip-link"
        href="#content"
      >
        Skip to main content
      </a>

      <header
        className="govuk-header "
        role="banner"
        data-module="govuk-header"
      >
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a
              href="/"
              className="govuk-header__link govuk-header__link--homepage"
            >
              <span className="govuk-header__logotype">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="govuk-header__logotype-crown inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 97"
                  height="30"
                  width="36"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6H55.5s6.4 7.2 7.9 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                  />
                </svg>{" "}
                <span className="govuk-header__logotype-text">GOV.UK</span>
              </span>
            </a>
          </div>
        </div>
      </header>
      <div className="">
        <div className="gem-c-layout-for-public__blue-bar govuk-width-container"></div>
      </div>

      <div id="wrapper" className="direction-ltr govuk-width-container">
        <div className="gem-c-contextual-breadcrumbs">
          <div
            data-module="gem-track-click ga4-link-tracker"
            className="gem-c-breadcrumbs govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile"
          >
            <ol className="govuk-breadcrumbs__list">
              <li className="govuk-breadcrumbs__list-item">
                <a
                  data-track-category="homeLinkClicked"
                  data-track-action="homeBreadcrumb"
                  data-track-label=""
                  data-track-options="{}"
                  data-ga4-link='{"event_name":"navigation","type":"breadcrumb","index":{"index_link":"1"},"index_total":"1"}'
                  className="govuk-breadcrumbs__link"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ol>
          </div>
        </div>

        <main role="main" id="content" className="guide" lang="en">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
                <h1 className="gem-c-title__text govuk-heading-xl">
                  Private renting
                </h1>
              </div>

              <a
                className="gem-c-skip-link govuk-skip-link govuk-!-display-none-print"
                data-module="govuk-skip-link"
                href="#guide-contents"
              >
                Skip to contents of guide
              </a>

              <aside className="part-navigation-container" role="complementary">
                <nav
                  data-module="gem-track-click ga4-link-tracker"
                  aria-label="Pages in this guide"
                  className="gem-c-contents-list"
                  role="navigation"
                >
                  <h2 className="govuk-heading-s">Contents</h2>
                  <ol className="govuk-list govuk-list--bullet">
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 1"
                        data-track-label="/private-renting"
                        data-track-options='{"dimension29":"Your rights and responsibilities"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":1},"index_total":12}'
                        href="/private-renting"
                      >
                        Your rights and responsibilities
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 2"
                        data-track-label="/private-renting/document-checks"
                        data-track-options='{"dimension29":"Document checks"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":2},"index_total":12}'
                        href="/private-renting/document-checks"
                      >
                        Document checks
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 3"
                        data-track-label="/private-renting/your-landlords-safety-responsibilities"
                        data-track-options='{"dimension29":"Your landlord&apos;s safety responsibilities"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":3},"index_total":12}'
                        href="/private-renting/your-landlords-safety-responsibilities"
                      >
                        Your landlord's safety responsibilities
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 4"
                        data-track-label="/private-renting/repairs"
                        data-track-options='{"dimension29":"Repairs"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":4},"index_total":12}'
                        href="/private-renting/repairs"
                      >
                        Repairs
                      </a>
                    </li>
                    <li
                      className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed gem-c-contents-list__list-item--active"
                      aria-current="true"
                    >
                      Rent increases
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 6"
                        data-track-label="/private-renting/rent-disputes"
                        data-track-options='{"dimension29":"Rent disputes"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":6},"index_total":12}'
                        href="/private-renting/rent-disputes"
                      >
                        Rent disputes
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 7"
                        data-track-label="/private-renting/rent-arrears"
                        data-track-options='{"dimension29":"Rent arrears"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":7},"index_total":12}'
                        href="/private-renting/rent-arrears"
                      >
                        Rent arrears
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 8"
                        data-track-label="/private-renting/deposits"
                        data-track-options='{"dimension29":"Deposits"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":8},"index_total":12}'
                        href="/private-renting/deposits"
                      >
                        Deposits
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 9"
                        data-track-label="/private-renting/houses-in-multiple-occupation"
                        data-track-options='{"dimension29":"Houses in multiple occupation"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":9},"index_total":12}'
                        href="/private-renting/houses-in-multiple-occupation"
                      >
                        Houses in multiple occupation
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 10"
                        data-track-label="/private-renting/antisocial-behaviour"
                        data-track-options='{"dimension29":"Anti-social behaviour"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":10},"index_total":12}'
                        href="/private-renting/antisocial-behaviour"
                      >
                        Anti-social behaviour
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 11"
                        data-track-label="/private-renting/changes-to-a-regulated-tenancy"
                        data-track-options='{"dimension29":"Changes to a regulated tenancy"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":11},"index_total":12}'
                        href="/private-renting/changes-to-a-regulated-tenancy"
                      >
                        Changes to a regulated tenancy
                      </a>
                    </li>
                    <li className="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
                      <a
                        className="gem-c-contents-list__link govuk-link"
                        data-track-category="contentsClicked"
                        data-track-action="content_item 12"
                        data-track-label="/private-renting/complaints"
                        data-track-options='{"dimension29":"Complaints"}'
                        data-ga4-link='{"event_name":"navigation","type":"content","section":"Contents","index":{"index_link":12},"index_total":12}'
                        href="/private-renting/complaints"
                      >
                        Complaints
                      </a>
                    </li>
                  </ol>
                </nav>
              </aside>
            </div>

            <div
              className="mt-12 govuk-grid-column-two-thirds"
              id="guide-contents"
            >
              <h1 className="gem-c-heading govuk-heading-l  govuk-!-margin-bottom-6">
                Rent increases
              </h1>

              <div
                className="gem-c-govspeak govuk-govspeak direction-ltr disable-youtube"
                data-module="govspeak"
              >
                <p className="govuk-body">
                  Your{" "}
                  <a
                    className="govuk-link"
                    href="/private-renting-tenancy-agreements"
                  >
                    tenancy agreement
                  </a>{" "}
                  should include how and when the rent will be reviewed.
                </p>

                <div
                  role="note"
                  aria-label="Information"
                  className="govuk-inset-text"
                >
                  <p className="govuk-body">
                    There are special rules for{" "}
                    <a
                      className="govuk-link"
                      href="/private-renting/changes-to-a-regulated-tenancy"
                    >
                      increasing protected (sometimes known as ‘regulated’)
                      tenancy rents
                    </a>
                    .
                  </p>
                </div>

                <h2
                  id="when-your-landlord-can-increase-rent"
                  className="govuk-heading-m"
                >
                  When your landlord can increase rent
                </h2>

                <p className="govuk-body">
                  For a periodic tenancy (rolling on a week-by-week or
                  month-by-month basis) your landlord cannot normally increase
                  the rent more than once a year without your agreement.
                </p>

                <p className="govuk-body">
                  For a fixed-term tenancy (running for a set period) your
                  landlord can only increase the rent if you agree. If you do
                  not agree, the rent can only be increased when the fixed term
                  ends.
                </p>

                <h2
                  id="general-rules-around-rent-increases"
                  className="govuk-heading-m"
                >
                  General rules around rent increases
                </h2>

                <p className="govuk-body">For any tenancy:</p>

                <ul className="govuk-list govuk-list--bullet">
                  <li>
                    your landlord must get your permission if they want to
                    increase the rent by more than previously agreed
                  </li>
                  <li>
                    the rent increase must be fair and realistic, which means in
                    line with average local rents
                  </li>
                </ul>

                <h2
                  id="how-your-landlord-must-propose-a-rent-increase"
                  className="govuk-heading-m"
                >
                  How your landlord must propose a rent increase
                </h2>

                <p className="govuk-body">
                  If the tenancy agreement lays down a procedure for increasing
                  rent, your landlord must stick to this. Otherwise, your
                  landlord can:
                </p>

                <ul className="govuk-list govuk-list--bullet">
                  <li>
                    renew your tenancy agreement at the end of the fixed term,
                    but with an increased rent
                  </li>
                  <li>
                    agree a rent increase with you and produce a written record
                    of the agreement that you both sign
                  </li>
                  <li>
                    use a ‘Landlord’s notice proposing a new rent’ form, which
                    increases the rent after the fixed term has ended
                  </li>
                </ul>

                <p className="govuk-body">
                  Your landlord must give you a minimum of one month’s notice
                  (if you pay rent weekly or monthly). If you have a yearly
                  tenancy, they must give you 6 months’ notice.
                </p>
              </div>

              <nav
                className="govuk-pagination govuk-pagination--block"
                role="navigation"
                aria-label="Pagination"
                data-module="ga4-link-tracker"
              >
                <div className="govuk-pagination__prev">
                  <a
                    className="govuk-link govuk-pagination__link"
                    href="/private-renting/repairs"
                    rel="prev"
                    data-track-category="contentsClicked"
                    data-track-action="previous"
                    data-track-label="/private-renting/repairs"
                    data-track-dimension="previous"
                    data-track-dimension-index="29"
                    data-ga4-link='{"event_name":"navigation","type":"content","text":"Repairs","section":"Previous"}'
                  >
                    <svg
                      className="govuk-pagination__icon govuk-pagination__icon--prev"
                      xmlns="http://www.w3.org/2000/svg"
                      height="13"
                      width="15"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 15 13"
                    >
                      <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
                    </svg>
                    <span className="govuk-pagination__link-title">
                      Previous
                    </span>
                    <span className="govuk-visually-hidden">:</span>
                    <span className="govuk-pagination__link-label">
                      Repairs
                    </span>
                  </a>
                </div>

                <div className="govuk-pagination__next">
                  <a
                    className="govuk-link govuk-pagination__link"
                    href="/private-renting/rent-disputes"
                    rel="next"
                    data-track-category="contentsClicked"
                    data-track-action="next"
                    data-track-label="/private-renting/rent-disputes"
                    data-track-dimension="next"
                    data-track-dimension-index="29"
                    data-ga4-link='{"event_name":"navigation","type":"content","text":"Rent disputes","section":"Next"}'
                  >
                    <svg
                      className="govuk-pagination__icon govuk-pagination__icon--next"
                      xmlns="http://www.w3.org/2000/svg"
                      height="13"
                      width="15"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 15 13"
                    >
                      <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
                    </svg>
                    <span className="govuk-pagination__link-title">Next</span>
                    <span className="govuk-visually-hidden">:</span>
                    <span className="govuk-pagination__link-label">
                      Rent disputes
                    </span>
                  </a>
                </div>
              </nav>

              <div className="responsive-bottom-margin">
                <a
                  href="/private-renting/print"
                  className="govuk-link govuk-link--no-visited-state govuk-body"
                  data-module="ga4-link-tracker"
                  data-ga4-link='{"event_name":"navigation","type":"content","section":"Footer","text":"View a printable version of the whole guide"}'
                >
                  View a printable version of the whole guide
                </a>
              </div>
            </div>

            <div className="govuk-grid-column-one-third">
              <div className="gem-c-contextual-sidebar">
                <div
                  className="gem-c-related-navigation"
                  data-module="gem-track-click ga4-link-tracker"
                >
                  <h2
                    id="related-nav-related_items-380da8e3"
                    className="govuk-heading-s"
                    data-track-count="sidebarRelatedItemSection"
                  >
                    Related content
                  </h2>
                  <nav
                    role="navigation"
                    className="gem-c-related-navigation__nav-section"
                    aria-labelledby="related-nav-related_items-380da8e3"
                    data-module="gem-toggle"
                  >
                    <ul className="gem-c-related-navigation__link-list">
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.1 Related content"
                          data-track-label="/housing-tribunals"
                          data-track-options='{"dimension28":"6","dimension29":"Solve a residential property dispute"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"1","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/housing-tribunals"
                        >
                          Solve a residential property dispute
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.2 Related content"
                          data-track-label="/private-renting-evictions"
                          data-track-options='{"dimension28":"6","dimension29":"Private renting for tenants: evictions in England"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"2","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/private-renting-evictions"
                        >
                          Private renting for tenants: evictions in England
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.3 Related content"
                          data-track-label="/private-renting-tenancy-agreements"
                          data-track-options='{"dimension28":"6","dimension29":"Private renting for tenants: tenancy agreements"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"3","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/private-renting-tenancy-agreements"
                        >
                          Private renting for tenants: tenancy agreements
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.4 Related content"
                          data-track-label="/if-youre-homeless-at-risk-of-homelessness"
                          data-track-options='{"dimension28":"6","dimension29":"Help if you’re homeless or about to become homeless"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"4","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/if-youre-homeless-at-risk-of-homelessness"
                        >
                          Help if you’re homeless or about to become homeless
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.5 Related content"
                          data-track-label="/rent-room-in-your-home"
                          data-track-options='{"dimension28":"6","dimension29":"Rent a room in your home"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"5","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/rent-room-in-your-home"
                        >
                          Rent a room in your home
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar govuk-link gem-c-related-navigation__section-link--inline  govuk-link gem-c-related-navigation__section-link--other"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.6 Related content"
                          data-track-label="/tenancy-deposit-protection"
                          data-track-options='{"dimension28":"6","dimension29":"Tenancy deposit protection"}'
                          data-ga4-link='{"event_name":"navigation","type":"related content","index":{"index_section":"1","index_link":"6","index_section_count":"1"},"index_total":"6","section":"Related content"}'
                          href="/tenancy-deposit-protection"
                        >
                          Tenancy deposit protection
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <div className="gem-c-contextual-footer">
                <div
                  className="gem-c-related-navigation"
                  data-module="gem-track-click ga4-link-tracker"
                >
                  <nav
                    role="navigation"
                    className="gem-c-related-navigation__nav-section"
                    aria-labelledby="related-nav-topics-66f278a1"
                    data-module="gem-toggle"
                  >
                    <h2
                      id="related-nav-topics-66f278a1"
                      className="gem-c-related-navigation__sub-heading gem-c-related-navigation__sub-heading--footer"
                      data-track-count="footerRelatedItemSection"
                    >
                      Explore the topic
                    </h2>

                    <ul className="gem-c-related-navigation__link-list">
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.1 Explore the topic"
                          data-track-label="/browse/housing-local-services/renting-property"
                          data-track-options='{"dimension28":"2","dimension29":"Renting a property"}'
                          data-ga4-link='{"event_name":"navigation","type":"contextual footer","index":{"index_section":"1","index_link":"1","index_section_count":"2"},"index_total":"2","section":"Explore the topic"}'
                          href="/browse/housing-local-services/renting-property"
                        >
                          Renting a property
                        </a>
                      </li>
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer"
                          data-track-category="relatedLinkClicked"
                          data-track-action="1.2 Explore the topic"
                          data-track-label="/topic/personal-tax/non-resident-landlord-scheme"
                          data-track-options='{"dimension28":"2","dimension29":"Non-resident landlords"}'
                          data-ga4-link='{"event_name":"navigation","type":"contextual footer","index":{"index_section":"1","index_link":"2","index_section_count":"2"},"index_total":"2","section":"Explore the topic"}'
                          href="/topic/personal-tax/non-resident-landlord-scheme"
                        >
                          Non-resident landlords
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <nav
                    role="navigation"
                    className="gem-c-related-navigation__nav-section"
                    aria-labelledby="related-nav-related_external_links-66f278a1"
                    data-module="gem-toggle"
                  >
                    <h2
                      id="related-nav-related_external_links-66f278a1"
                      className="gem-c-related-navigation__sub-heading gem-c-related-navigation__sub-heading--footer  gem-c-related-navigation__sub-heading--other"
                      data-track-count="footerRelatedItemSection"
                    >
                      Elsewhere on the web
                    </h2>

                    <ul className="gem-c-related-navigation__link-list">
                      <li className="gem-c-related-navigation__link">
                        <a
                          className="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer  govuk-link gem-c-related-navigation__section-link--other"
                          rel="external"
                          data-track-category="relatedLinkClicked"
                          data-track-action="2.1 Elsewhere on the web"
                          data-track-label="https://www.citizensadvice.org.uk/consumer/energy/energy-supply/"
                          data-track-options='{"dimension28":"1","dimension29":"Your energy rights as a tenant"}'
                          data-ga4-link='{"event_name":"navigation","type":"contextual footer","index":{"index_section":"2","index_link":"1","index_section_count":"2"},"index_total":"1","section":"Elsewhere on the web"}'
                          href="https://www.citizensadvice.org.uk/consumer/energy/energy-supply/"
                        >
                          Your energy rights as a tenant
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="govuk-width-container">
        <div
          className="gem-c-feedback govuk-!-display-none-print"
          data-module="feedback ga4-event-tracker"
        >
          <div
            className="gem-c-feedback__prompt gem-c-feedback__js-show js-prompt"
            tabIndex={-1}
          >
            <div className="gem-c-feedback__prompt-content">
              <div
                className="gem-c-feedback__prompt-questions js-prompt-questions"
                hidden
              >
                <div className="gem-c-feedback__prompt-question-answer">
                  <h2 className="gem-c-feedback__prompt-question">
                    Is this page useful?
                  </h2>
                  <ul className="gem-c-feedback__option-list">
                    <li
                      className="gem-c-feedback__option-list-item govuk-visually-hidden"
                      hidden
                    >
                      <a
                        className="gem-c-feedback__prompt-link"
                        data-track-category="yesNoFeedbackForm"
                        data-track-action="ffMaybeClick"
                        role="button"
                        hidden={true}
                        aria-hidden="true"
                        href="/contact/govuk"
                      >
                        Maybe
                      </a>{" "}
                    </li>
                    <li className="gem-c-feedback__option-list-item">
                      <button
                        className="govuk-button gem-c-feedback__prompt-link js-page-is-useful"
                        data-track-category="yesNoFeedbackForm"
                        data-track-action="ffYesClick"
                        data-ga4-event='{"event_name":"form_submit","type":"feedback","text":"Yes", "section": "Is this page useful?"}'
                      >
                        Yes{" "}
                        <span className="govuk-visually-hidden">
                          this page is useful
                        </span>
                      </button>
                    </li>
                    <li className="gem-c-feedback__option-list-item">
                      <button
                        className="govuk-button gem-c-feedback__prompt-link js-toggle-form js-page-is-not-useful"
                        data-track-category="yesNoFeedbackForm"
                        data-track-action="ffNoClick"
                        aria-controls="page-is-not-useful"
                        aria-expanded="false"
                        data-ga4-event='{"event_name":"form_submit","type":"feedback","text":"No", "section": "Is this page useful?"}'
                      >
                        No{" "}
                        <span className="govuk-visually-hidden">
                          this page is not useful
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="gem-c-feedback__prompt-questions gem-c-feedback__prompt-success js-prompt-success"
                role="alert"
                hidden
              >
                Thank you for your feedback
              </div>

              <div
                className="gem-c-feedback__prompt-questions gem-c-feedback__prompt-questions--something-is-wrong js-prompt-questions"
                hidden
              >
                <button
                  className="govuk-button gem-c-feedback__prompt-link js-toggle-form js-something-is-wrong"
                  data-track-category="Onsite Feedback"
                  data-track-action="GOV-UK Open Form"
                  aria-controls="something-is-wrong"
                  aria-expanded="false"
                  data-ga4-event='{"event_name":"form_submit","type":"feedback","text":"Report a problem with this page", "section": "Is this page useful?"}'
                >
                  Report a problem with this page
                </button>
              </div>
            </div>
          </div>

          <form
            action="/contact/govuk/problem_reports"
            id="something-is-wrong"
            className="gem-c-feedback__form js-feedback-form"
            data-track-category="Onsite Feedback"
            data-track-action="GOV.UK Send Form"
            method="post"
            hidden
          >
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <input
                  type="hidden"
                  name="url"
                  value="https://www.gov.uk/private-renting/rent-increases"
                />

                <h3 className="gem-c-feedback__form-heading">
                  Help us improve GOV.UK
                </h3>
                <p
                  id="feedback_explanation"
                  className="gem-c-feedback__form-paragraph"
                >
                  Don’t include personal or financial information like your
                  National Insurance number or credit card details.
                </p>

                <div className="govuk-visually-hidden" aria-hidden="true">
                  <label htmlFor="giraffe">
                    This field is for robots only. Please leave blank
                  </label>
                  <input
                    id="giraffe"
                    name="giraffe"
                    type="text"
                    pattern=".{0}"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="gem-c-textarea govuk-form-group govuk-!-margin-bottom-6">
                  <label
                    htmlFor="textarea-0e7bc4e6"
                    className="gem-c-label govuk-label"
                  >
                    What were you doing?
                  </label>

                  <textarea
                    name="what_doing"
                    className="govuk-textarea"
                    id="textarea-0e7bc4e6"
                    rows={3}
                    spellCheck="true"
                    aria-describedby="feedback_explanation"
                  ></textarea>
                </div>

                <div className="gem-c-textarea govuk-form-group govuk-!-margin-bottom-6">
                  <label
                    htmlFor="textarea-8edfb278"
                    className="gem-c-label govuk-label"
                  >
                    What went wrong?
                  </label>

                  <textarea
                    name="what_wrong"
                    className="govuk-textarea"
                    id="textarea-8edfb278"
                    rows={3}
                    spellCheck="true"
                  ></textarea>
                </div>

                <button
                  className="gem-c-button govuk-button"
                  type="submit"
                  data-ga4-event='{"event_name":"form_submit","type":"feedback","text":"Send","section":"Help us improve GOV.UK"}'
                >
                  Send
                </button>

                <button
                  className="govuk-button govuk-button--secondary gem-c-feedback__close gem-c-feedback__js-show js-close-form"
                  data-track-category="Onsite Feedback"
                  data-track-action="GOV.UK Close Form"
                  aria-controls="something-is-wrong"
                  aria-expanded="true"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>

          <form
            action="/contact/govuk/email-survey-signup"
            id="page-is-not-useful"
            className="gem-c-feedback__form gem-c-feedback__form--email gem-c-feedback__js-show js-feedback-form"
            data-track-category="yesNoFeedbackForm"
            data-track-action="Send Form"
            method="post"
          >
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds" id="survey-wrapper">
                <input
                  name="email_survey_signup[survey_id]"
                  type="hidden"
                  value="footer_satisfaction_survey"
                />
                <input
                  name="email_survey_signup[survey_source]"
                  type="hidden"
                  value="/private-renting/rent-increases"
                />

                <h3 className="gem-c-feedback__form-heading">
                  Help us improve GOV.UK
                </h3>
                <p
                  id="survey_explanation"
                  className="gem-c-feedback__form-paragraph"
                >
                  To help us improve GOV.UK, we’d like to know more about your
                  visit today. We’ll send you a link to a feedback form. It will
                  take only 2 minutes to fill in. Don’t worry we won’t send you
                  spam or share your email address with anyone.
                </p>

                <div className="govuk-form-group">
                  <label
                    htmlFor="input-3cd7f373"
                    className="gem-c-label govuk-label"
                  >
                    Email address
                  </label>

                  <input
                    aria-describedby="survey_explanation"
                    autoComplete="email"
                    className="gem-c-input govuk-input"
                    id="input-3cd7f373"
                    name="email_survey_signup[email_address]"
                    spellCheck="false"
                    type="email"
                  />
                </div>

                <button
                  className="gem-c-button govuk-button"
                  type="submit"
                  data-ga4-event='{"event_name":"form_submit","type":"feedback","text":"Send me the survey","section":"Help us improve GOV.UK"}'
                >
                  Send me the survey
                </button>

                <button
                  className="govuk-button govuk-button--secondary gem-c-feedback__close js-close-form"
                  data-track-category="yesNoFeedbackForm"
                  data-track-action="ffFormClose"
                  aria-controls="page-is-not-useful"
                  aria-expanded="true"
                  hidden
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer
        className="gem-c-layout-footer govuk-footer gem-c-layout-footer--border"
        role="contentinfo"
        data-module="ga4-link-tracker"
      >
        <div className="govuk-width-container">
          <div
            className="govuk-footer__navigation"
            data-module="gem-track-click"
            data-track-links-only
          >
            <div className="govuk-grid-column-two-thirds govuk-!-display-none-print">
              <h2 className="govuk-footer__heading govuk-heading-m">Topics</h2>
              <ul className="govuk-footer__list govuk-footer__list--columns-2">
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/benefits"
                    data-track-options='{"dimension29":"Benefits"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"1","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/births-deaths-marriages"
                    data-track-options='{"dimension29":"Births, death, marriages and care"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"2","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/births-deaths-marriages"
                  >
                    Births, death, marriages and care
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/business"
                    data-track-options='{"dimension29":"Business and self-employed"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"3","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/business"
                  >
                    Business and self-employed
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/childcare-parenting"
                    data-track-options='{"dimension29":"Childcare and parenting"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"4","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/childcare-parenting"
                  >
                    Childcare and parenting
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/citizenship"
                    data-track-options='{"dimension29":"Citizenship and living in the UK"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"5","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/citizenship"
                  >
                    Citizenship and living in the UK
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/justice"
                    data-track-options='{"dimension29":"Crime, justice and the law"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"6","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/justice"
                  >
                    Crime, justice and the law
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/disabilities"
                    data-track-options='{"dimension29":"Disabled people"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"7","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/disabilities"
                  >
                    Disabled people
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/driving"
                    data-track-options='{"dimension29":"Driving and transport"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"8","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/driving"
                  >
                    Driving and transport
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/education"
                    data-track-options='{"dimension29":"Education and learning"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"9","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/education"
                  >
                    Education and learning
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/employing-people"
                    data-track-options='{"dimension29":"Employing people"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"10","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/employing-people"
                  >
                    Employing people
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/environment-countryside"
                    data-track-options='{"dimension29":"Environment and countryside"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"11","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/environment-countryside"
                  >
                    Environment and countryside
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/housing-local-services"
                    data-track-options='{"dimension29":"Housing and local services"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"12","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/housing-local-services"
                  >
                    Housing and local services
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/tax"
                    data-track-options='{"dimension29":"Money and tax"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"13","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/tax"
                  >
                    Money and tax
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/abroad"
                    data-track-options='{"dimension29":"Passports, travel and living abroad"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"14","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/abroad"
                  >
                    Passports, travel and living abroad
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/visas-immigration"
                    data-track-options='{"dimension29":"Visas and immigration"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"15","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/visas-immigration"
                  >
                    Visas and immigration
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="topicsLink"
                    data-track-label="/browse/working"
                    data-track-options='{"dimension29":"Working, jobs and pensions"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"16","index_section":"1","index_section_count":"5"},"index_total":"16","section":"Topics"}'
                    href="/browse/working"
                  >
                    Working, jobs and pensions
                  </a>
                </li>
              </ul>
            </div>
            <div className="govuk-grid-column-one-third govuk-!-display-none-print">
              <h2 className="govuk-footer__heading govuk-heading-m">
                Government activity
              </h2>
              <ul className="govuk-footer__list govuk-footer__list--columns-1">
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/government/organisations"
                    data-track-options='{"dimension29":"Departments"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"1","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/government/organisations"
                  >
                    Departments
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/search/news-and-communications"
                    data-track-options='{"dimension29":"News"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"2","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/search/news-and-communications"
                  >
                    News
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/search/guidance-and-regulation"
                    data-track-options='{"dimension29":"Guidance and regulation"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"3","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/search/guidance-and-regulation"
                  >
                    Guidance and regulation
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/search/research-and-statistics"
                    data-track-options='{"dimension29":"Research and statistics"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"4","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/search/research-and-statistics"
                  >
                    Research and statistics
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/search/policy-papers-and-consultations"
                    data-track-options='{"dimension29":"Policy papers and consultations"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"5","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/search/policy-papers-and-consultations"
                  >
                    Policy papers and consultations
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/search/transparency-and-freedom-of-information-releases"
                    data-track-options='{"dimension29":"Transparency"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"6","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/search/transparency-and-freedom-of-information-releases"
                  >
                    Transparency
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/government/how-government-works"
                    data-track-options='{"dimension29":"How government works"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"7","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/government/how-government-works"
                  >
                    How government works
                  </a>
                </li>
                <li className="govuk-footer__list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="governmentactivityLink"
                    data-track-label="/government/get-involved"
                    data-track-options='{"dimension29":"Get involved"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"8","index_section":"2","index_section_count":"5"},"index_total":"8","section":"Government activity"}'
                    href="/government/get-involved"
                  >
                    Get involved
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="govuk-footer__section-break" />
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul
                className="govuk-footer__inline-list govuk-!-display-none-print"
                data-module="gem-track-click"
                data-track-links-only
              >
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/help"
                    data-track-options='{"dimension29":"Help"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"1","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/help"
                  >
                    Help
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/help/privacy-notice"
                    data-track-options='{"dimension29":"Privacy"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"2","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/help/privacy-notice"
                  >
                    Privacy
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/help/cookies"
                    data-track-options='{"dimension29":"Cookies"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"3","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/help/cookies"
                  >
                    Cookies
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/help/accessibility-statement"
                    data-track-options='{"dimension29":"Accessibility statement"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"4","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/help/accessibility-statement"
                  >
                    Accessibility statement
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/contact"
                    data-track-options='{"dimension29":"Contact"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"5","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/help/terms-conditions"
                    data-track-options='{"dimension29":"Terms and conditions"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"6","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/help/terms-conditions"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    lang="cy"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/cymraeg"
                    data-track-options='{"dimension29":"Rhestr o Wasanaethau Cymraeg"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"7","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/cymraeg"
                  >
                    Rhestr o Wasanaethau Cymraeg
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a
                    className="govuk-footer__link"
                    data-track-category="footerClicked"
                    data-track-action="supportLink"
                    data-track-label="/government/organisations/government-digital-service"
                    data-track-options='{"dimension29":"Government Digital Service"}'
                    data-ga4-link='{"event_name":"navigation","type":"footer","index":{"index_link":"8","index_section":"3","index_section_count":"5"},"index_total":"8","section":"Support links"}'
                    href="/government/organisations/government-digital-service"
                  >
                    Government Digital Service
                  </a>
                </li>
              </ul>
              <svg
                aria-hidden="true"
                focusable="false"
                className="govuk-footer__licence-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 483.2 195.7"
                height="17"
                width="41"
              >
                <path
                  fill="currentColor"
                  d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
                ></path>
              </svg>
              <span
                className="govuk-footer__licence-description"
                data-module="gem-track-click"
                data-track-action="copyrightLink"
                data-track-category="footerClicked"
                data-track-label="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                data-track-options='{"dimension29": "Open Government Licence v3.0"}'
                data-track-links-only
                data-ga4-track-links-only
                data-ga4-link='{"event_name":"navigation","section":"Licence","index":{"index_section":"4","index_link":"1","index_section_count":"5"},"text":"Open Government Licence v3.0","index_total":"1","type":"footer"}'
              >
                All content is available under the{" "}
                <a
                  className="govuk-footer__link"
                  href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                  rel="license"
                >
                  Open Government Licence v3.0
                </a>
                , except where otherwise stated
              </span>
            </div>
            <div
              className="govuk-footer__meta-item"
              data-module="gem-track-click"
              data-track-action="copyrightLink"
              data-track-category="footerClicked"
              data-track-label="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              data-track-options='{"dimension29": "© Crown copyright"}'
              data-track-links-only
              data-ga4-link='{"event_name":"navigation","section":"Copyright","index":{"index_section":"5","index_link":"1","index_section_count":"5"},"text":"© Crown copyright","index_total":"1","type":"footer"}'
            >
              <a
                className="govuk-footer__link govuk-footer__copyright-logo"
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >
                © Crown copyright
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
