import {
  ChartBarSquareIcon,
  CheckBadgeIcon,
  ChevronDoubleDownIcon,
  CurrencyPoundIcon,
  UserCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import Benefit from '../components/Benefit';
import Button from '../components/Button';
import Feature from '../components/Feature';
import Navigation from '../components/Navigation';
import Pill from '../components/Pill';
import Plan from '../components/Plan';
import Section from '../components/Section';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>D3J Digital - Web Development as a Subscription</title>
        <meta
          name="description"
          content="Unlimited web development services for a fixed monthly price. Save thousands on recruitment, agency, and contractor fees. No contract. Cancel anytime."
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-body">
        <header className="bg-white border-b border-black">
          <div className="hidden md:block">
            <Banner>
              Our subscriptions come with no contract, no minimum term, and you
              can cancel anytime.
            </Banner>
          </div>
          <div className="flex items-center gap-12 container">
            <Image
              src="/assets/logos/logo-black.svg"
              width="130"
              height="100%"
              alt="D3J Digital"
            />
            <div className="hidden lg:block">
              <Navigation
                items={[
                  { label: 'About', href: '#about' },
                  { label: 'Get Started', href: '#getstarted' },
                  { label: 'Benefits', href: '#benefits' },
                  { label: 'Plans', href: '#plans' },
                  { label: 'FAQs', href: '#faqs' },
                ]}
              />
            </div>
            <div className="ml-auto">
              <Button
                label="Login"
                onClick={() => (
                  window.open(
                    'https://billing.stripe.com/p/login/fZecQT8sTgLH6s08ww'
                  ),
                  '_blank'
                )}
              />
            </div>
          </div>
        </header>
        <Section id="home">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="grid gap-6">
              <h1 className="text-5xl font-accent">
                We&apos;re a web dev agency with a twist.
              </h1>
              <p className="text-2xl font-light">
                Think of Netflix, but for web development. D3J Digital offers
                one of the first Web Development as a Subscription service. Try
                us and see how we can help scale your business.
              </p>
              <p className="text-2xl">
                No contract. No min. term. Cancel anytime.
              </p>
              <div className="flex gap-6">
                <Button
                  label="Learn More"
                  onClick={() => (window.location.href = '#about')}
                />
                <Button
                  label="View Plans"
                  onClick={() => (window.location.href = '#plans')}
                />
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/assets/images/undraw/developer.svg"
                width="550"
                height="360"
                alt="Developer"
              />
            </div>
          </div>
        </Section>
        <Section id="usps">
          <Feature>
            <div className="grid md:grid-cols-3 text-center">
              <div className="p-8">
                <p className="text-gray-400">10+ years</p>
                <p className="text-xl">Industry experience</p>
              </div>
              <div className="p-8">
                <p className="text-gray-400">Working with</p>
                <p className="text-xl">Clients around the globe</p>
              </div>
              <div className="p-8">
                <p className="text-gray-400">Delivering</p>
                <p className="text-xl">Top-notch service</p>
              </div>
            </div>
          </Feature>
        </Section>
        <Section id="about">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="grid gap-6">
              <Pill label="About us" />
              <h2 className="text-4xl font-accent">
                D3J is your perfect web development partner in an ever-changing
                world.
              </h2>
              <p>
                We&apos;re a small team of passionate web developers, designers,
                and digital marketers who want to make web-based services more
                accessible to everyone and every budget. What is usually costly
                and time-consuming is now as easy as signing up for your
                favorite streaming service.
              </p>
              <p>
                Our unique subscription model puts you in the driving seat and
                is the first step in ensuring your business stays ahead of the
                game. For a fixed monthly fee, you get access to your dedicated
                developer, who will get to know you and your business and work
                through your requests to the highest possible standard.
                It&apos;s like having your employee but without the
                responsibility and overhead.
              </p>
              <p>
                Unlike other agencies, we don&apos;t send quotes, proposals, and
                invoices. Instead, you have access to a private job board where
                you can list as many tasks as you&apos;d like, and we&apos;ll
                work through them one at a time. We also don&apos;t tie you into
                a contract or minimum term. You only pay when you need us and
                can cancel your subscription at any time.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/assets/images/undraw/world.svg"
                width="620"
                height="500"
                alt="World"
              />
            </div>
          </div>
        </Section>
        <Section id="businesses">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="hidden md:block">
              <Image
                src="/assets/images/undraw/agreement.svg"
                width="560"
                height="340"
                alt="Agreement"
              />
            </div>
            <div className="grid gap-6">
              <Pill label="For businesses" />
              <h2 className="text-4xl font-accent">
                Save thousands on recruitment, employee, and contractor fees.
              </h2>
              <p>
                Finding a full-time employee or contractor can be time-consuming
                and costly. Once they&apos;re onboard, you face paying hefty
                salaries, fees and expenses. Don&apos;t forget the added
                responsibilities that come with being an employer. It could be
                easier to offload your work to us.
              </p>
              <p>
                Our service provides a dedicated remote senior web developer for
                significantly less than what it would cost for a full-time
                junior developer. You also get the added benefit of some
                attractive incentives, on-hand expert support, and progress
                reports.
              </p>
            </div>
          </div>
        </Section>
        <Section id="agencies">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="grid gap-6">
              <Pill label="For agencies" />
              <h2 className="text-4xl font-accent">
                Outsource your projects and get rapid, high-quality results you
                and your clients will love.
              </h2>
              <p>
                We work closely with several agencies as their web development
                partner to provide them with a quick, reliable, and
                cost-effective service. Whether you need ad-hoc jobs completed,
                an extra pair of hands to work alongside your current team, or
                someone to take on a whole project, we&apos;re here and ready to
                help.
              </p>
              <p>
                Email us at{' '}
                <a
                  href="mailto:hello@d3j.digital"
                  className="underline cursor-pointer"
                >
                  hello@d3j.digital
                </a>
                , or{' '}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() => (
                    window.open('https://calendly.com/d3j/30min'), '_blank'
                  )}
                >
                  book a call
                </span>
                , to learn more.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/assets/images/undraw/collaborators.svg"
                width="560"
                height="330"
                alt="Collaborators"
              />
            </div>
          </div>
        </Section>
        <Section id="getstarted">
          <div className="grid gap-6 text-center">
            <Pill label="Get started" />
            <h2 className="text-4xl font-accent">As easy as 1, 2, 3...</h2>
            <div className="grid md:grid-cols-3 gap-20 my-6">
              <div>
                <Image
                  src="/assets/images/step-1.svg"
                  width="200"
                  height="115"
                  alt="Step 1"
                />
                <h3 className="text-xl font-bold mt-6 mb-4">Choose a plan</h3>
                <p>
                  Have a look at our plans below and choose the right one for
                  you. The longer you commit, the more you save.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/step-2.svg"
                  width="200"
                  height="115"
                  alt="Step 2"
                />
                <h3 className="text-xl font-bold mt-6 mb-4">
                  Access your job board
                </h3>
                <p>
                  Get invited to your private job board, where you can add
                  requests, ask questions, and keep track of progress.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/step-3.svg"
                  width="200"
                  height="115"
                  alt="Step 3"
                />
                <h3 className="text-xl font-bold mt-6 mb-4">
                  Put your feet up
                </h3>
                <p>
                  We will begin to work through your requests so you can sit
                  back and relax, knowing everything is taken care of.
                </p>
              </div>
            </div>
            <Button
              label="View Plans"
              onClick={() => (window.location.href = '#plans')}
            />
          </div>
        </Section>
        <Section id="benefits">
          <div className="grid gap-6 text-center">
            <Pill label="Benefits" />
            <h2 className="text-4xl font-accent">Perks of using our service</h2>
            <div className="grid md:grid-cols-3 gap-20 my-6">
              <Benefit
                icon={<CheckBadgeIcon className="w-14 h-14 mx-auto" />}
                title="Private Job Board"
                description="Easily keep track of requests, progress, and communication via a private Trello board."
              />
              <Benefit
                icon={<CurrencyPoundIcon className="w-14 h-14 mx-auto" />}
                title="Fixed Monthly Price"
                description="No quotes, no invoices, no hidden surprises. Just the same price each month."
              />
              <Benefit
                icon={<ChevronDoubleDownIcon className="w-14 h-14 mx-auto" />}
                title="Keep Overheads Low"
                description="Cheaper than a full-time employee or agency, with some amazing tax incentives."
              />
              <Benefit
                icon={<UserCircleIcon className="w-14 h-14 mx-auto" />}
                title="Dedicated Developer"
                description="Your on-hand industry expert is there to work with you every step of the way."
              />
              <Benefit
                icon={<ChartBarSquareIcon className="w-14 h-14 mx-auto" />}
                title="Unlimited Requests"
                description="Whether you have an issue with your site, or want something new, it's all included."
              />
              <Benefit
                icon={<XCircleIcon className="w-14 h-14 mx-auto" />}
                title="Flexible and scalable"
                description="No contract. No minimum term. Only pay when you need us and cancel anytime."
              />
            </div>
          </div>
        </Section>
        <Section id="sow">
          <div className="grid gap-12">
            <div className="grid gap-6 text-center">
              <Pill label="Scope of work" />
              <h2 className="text-4xl font-accent">
                Apps, websites, hosting & more
              </h2>
            </div>
            <Feature>
              <div className="grid md:grid-cols-4 gap-16 p-16 mt-6 overflow-auto">
                {[
                  'WordPress',
                  'Elementor',
                  'Webflow',
                  'Hubspot',
                  'WooCommerce',
                  'Shopify',
                  'Magento',
                  'Stripe',
                  'Laravel',
                  'Lumen',
                  'Zend',
                  'Symfony',
                  'Vanilla JS',
                  'React',
                  'Vue',
                  'jQuery',
                  'API',
                  'PWA',
                  'SPA',
                  'SaaS',
                  'MailChimp',
                  'Mailgun',
                  'SendGrid',
                  'Custom SMTP',
                  'AWS',
                  'Google Cloud',
                  'Digital Ocean',
                  'Bare Metal',
                ].map((option, index) => {
                  return (
                    <p key={index} className="pb-8 border-b-4 border-gray-500">
                      {option}
                    </p>
                  );
                })}
              </div>
            </Feature>
          </div>
        </Section>
        <Section id="plans">
          <div className="grid gap-12">
            <div className="grid gap-6 text-center">
              <Pill label="Plans" />
              <h2 className="text-4xl font-accent">
                Choose a plan that&apos;s right for you
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
              <Plan
                title="Monthly"
                subtitle="Pause or cancel anytime"
                price="1,500"
                onClick={() => (
                  window.open('https://buy.stripe.com/5kAg1ObIY2Jy2Zi4gn'),
                  '_blank'
                )}
              />
              <Plan
                title="Quarterly"
                subtitle="£4,000 + VAT paid quarterly"
                price="1,333"
                onClick={() => (
                  window.open('https://buy.stripe.com/5kAg1O7sI97W2Zi9AI'),
                  '_blank'
                )}
              />
              <Plan
                title="Yearly"
                subtitle="£15,000 + VAT paid annually"
                price="1,250"
                onClick={() => (
                  window.open('https://buy.stripe.com/fZe02Q3cs0BqczS7sB'),
                  '_blank'
                )}
              />
              <div className="grid sm:col-span-3 lg:col-span-1 gap-4 p-8 bg-white border border-b-4 border-black rounded">
                <p className="font-bold">Book a Call</p>
                <p>
                  Learn more about how D3J Digital works and how it can help
                  you.
                </p>
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => (
                    window.open('https://calendly.com/d3j/30min'), '_blank'
                  )}
                >
                  Book a call
                </p>
                <hr className="my-2" />
                <p className="font-bold">Already subscribed?</p>
                <p>Awesome! Did you know you can manage it at any time?</p>
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => (
                    window.open(
                      'https://billing.stripe.com/p/login/fZecQT8sTgLH6s08ww'
                    ),
                    '_blank'
                  )}
                >
                  Manage subscription
                </p>
              </div>
            </div>
            <Image
              src="/assets/logos/stripe-badge.svg"
              width="100%"
              height="40"
              alt="Powered by Stripe"
            />
          </div>
        </Section>
        <Section id="faqs">
          <div className="grid gap-12">
            <div className="grid gap-6 text-center">
              <Pill label="FAQs" />
              <h2 className="text-4xl font-accent">Commonly asked questions</h2>
            </div>
            <div className="grid gap-4 md:w-3/4 m-auto">
              <Accordion title="Is there a limit to how many requests I can have?">
                <p>
                  Once subscribed, you can add as many web development requests
                  to your backlog as you&apos;d like, and they will be completed
                  in order of priority.
                </p>
              </Accordion>
              <Accordion title="How fast will requests be completed?">
                <p>
                  Minor requests such as bug fixes and CSS tweaks will usually
                  be completed in a day or two. More complex requests may take
                  longer. We provide an estimated timescale and start date for
                  each request.
                </p>
              </Accordion>
              <Accordion title="Who are the developers?">
                <p>
                  D3J Digital is a one-person agency, so you&apos;ll work with
                  me, Dom, directly. We may occasionally outsource work, such as
                  design and marketing, to our trusted partners.
                </p>
              </Accordion>
              <Accordion title="Where are you based?">
                <p>
                  We are in the UK (GMT), but have clients all around the world
                  and can work with any time zone.
                </p>
              </Accordion>
              <Accordion title="Are you a legit company?">
                <p>
                  Absolutely! We are a registered company in the UK under the
                  name D3J Digital Limited.
                </p>
                <p>Our company number is 14159497.</p>
                <p>Our VAT registration number is 423631324.</p>
              </Accordion>
              <Accordion title="How do I request jobs?">
                <p>
                  D3J Digital offers lots of flexibility in how you request jobs
                  using Trello. Some common ways clients request jobs are direct
                  via Trello, sharing Google docs, sharing an image, or
                  recording a Loom video.
                </p>
              </Accordion>
              <Accordion title="Are there any refunds if I don't like the service?">
                <p>
                  Due to the high-quality nature of the work, there will be no
                  refunds issued.
                </p>
              </Accordion>
              <Accordion title="How are subscriptions handled?">
                <p>
                  Subscriptions are handled by our secure payment gateway,
                  Stripe.
                </p>
              </Accordion>
            </div>
          </div>
        </Section>
        <Section id="poweredby">
          <div className="grid gap-6 text-center">
            <h2 className="text-4xl font-accent">Powered by</h2>
            <div className="grid md:grid-cols-3 text-center">
              <Image
                src="/assets/logos/trello-logo.svg"
                width="100%"
                height="100%"
                alt="Trello"
              />
              <Image
                src="/assets/logos/stripe-logo.svg"
                width="100%"
                height="100%"
                alt="Stripe"
              />
              <Image
                src="/assets/logos/slack-logo.svg"
                width="100%"
                height="100%"
                alt="Slack"
              />
            </div>
          </div>
        </Section>
        <footer className="bg-white border-t border-black">
          <div className="flex items-center justify-between gap-4 container">
            <Image
              src="/assets/logos/logo-black.svg"
              width="130"
              height="100"
              alt="D3J Digital"
            />
            <p>&copy; D3J Digital Limited {new Date().getFullYear()}</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
