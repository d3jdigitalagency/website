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
import AccordionGroup from '../components/AccordionGroup';
import Benefit from '../components/Benefit';
import Button from '../components/Button';
import PageSection from '../components/PageSection';
import Plan from '../components/Plan';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>D3J Digital - Web Development as a Subscription</title>
        <meta
          name="description"
          content="Unlimited web development services for one fixed monthly price. Save thousands on recruitment, agency and contractor fees. No contract. Cancel anytime."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-body">
        <header className="bg-black text-white">
          <div className="flex justify-center md:justify-between items-center container font-bold">
            <Image
              src="/assets/logos/logo-white.svg"
              width="140"
              height="115"
              alt="D3J Digital Limited"
            />
            <ul className="hidden md:flex gap-12">
              <li
                className="cursor-pointer"
                onClick={() => (window.location.href = '#process')}
              >
                Get started
              </li>
              <li
                className="cursor-pointer"
                onClick={() => (window.location.href = '#benefits')}
              >
                Benefits
              </li>
              <li
                className="cursor-pointer"
                onClick={() => (window.location.href = '#plans')}
              >
                Plans
              </li>
              <li
                className="cursor-pointer"
                onClick={() => (window.location.href = '#faqs')}
              >
                FAQs
              </li>
            </ul>
          </div>
        </header>
        <PageSection className="text-center bg-black text-white" id="home">
          <h1 className="text-5xl font-primary">
            A Web Development agency with a twist
          </h1>
          <p className="-mt-5 text-3xl">
            Stay ahead of the game with our unique subscriptions.
          </p>
          <div className="flex w-auto m-auto">
            <Button
              type="primary"
              label="View Plans"
              onClick={() => (window.location.href = '#plans')}
            />
          </div>
          <ChevronDoubleDownIcon
            className="w-10 h-10 mx-auto animate-bounce cursor-pointer"
            onClick={() => (window.location.href = '#process')}
          />
        </PageSection>
        <PageSection
          id="process"
          title="Get started in 3 easy steps"
          subtitle="You'll be up and running in the time it takes to make a coffee."
        >
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 text-center">
            <div className="col-span-1">
              <Image
                src="/assets/images/step-1.svg"
                width="200"
                height="115"
                alt="Step 1"
              />
              <p className="text-xl mt-6 mb-4 font-bold">Choose a plan</p>
              <p>
                Have a look at our plans below and choose the right one for you.
                The longer you commit, the more you save.
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/images/step-2.svg"
                width="200"
                height="115"
                alt="Step 2"
              />
              <p className="text-xl mt-6 mb-4 font-bold">
                Access your job board
              </p>
              <p>
                Get invited to your private job board, where you can add
                requests, ask questions, and keep track of progress.
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src="/assets/images/step-3.svg"
                width="200"
                height="115"
                alt="Step 3"
              />
              <p className="text-xl mt-6 mb-4 font-bold">Put your feet up</p>
              <p>
                We will begin to work through your requests so you can sit back
                and relax, knowing everything is taken care of.
              </p>
            </div>
          </div>
          <div className="w-auto m-auto">
            <Button
              type="secondary"
              label="View benefits"
              onClick={() => (window.location.href = '#benefits')}
            />
          </div>
        </PageSection>
        <PageSection
          className="bg-gray-50"
          id="about"
          title="Simplicity is the ultimate sophistication"
          subtitle="Our clients love our no-nonsense approach."
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center p-8 bg-white">
              <Image
                src="/assets/logos/trello-logo-gradient-blue.svg"
                width="200"
                height="115"
                alt="Trello"
              />
              <Image
                src="/assets/logos/stripe-logo-gradient-purple.svg"
                width="200"
                height="115"
                alt="Stripe"
              />
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-xl mb-4 font-bold">Zero time-wasting</p>
                <p>
                  There&apos;s nothing worse than pointless meetings, waiting
                  for responses, and chasing for updates. We&apos;ve streamlined
                  our processes to make sure we&apos;re as efficient as
                  possible, and that we deliver on our promise of producing
                  quality over quantity.
                </p>
              </div>
              <div>
                <p className="text-xl mb-4 font-bold">
                  Job management made easy
                </p>
                <p>
                  View active, queued, and completed tasks whenever you like
                  with your own private Trello board. We aim to respond to each
                  request within 24 hours with an estimated timescale and start
                  date. Everything is managed on your job board, so you always
                  have full visibility.
                </p>
              </div>
              <div>
                <p className="text-xl mb-4 font-bold">
                  Years of knowledge and experience
                </p>
                <p>
                  We have over 8 years of industry experience and expertise to
                  help us provide the highest quality service possible.
                  We&apos;re extremely passionate about what we do, and will do
                  everything we can to make sure you are satisfied with the
                  results.
                </p>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection
          id="benefits"
          title="Benefits of our service"
          subtitle="Perks you don't even get from a multi-million dollar agency."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              description="Got an issue with your site or want a new feature building? It's all included."
            />
            <Benefit
              icon={<XCircleIcon className="w-14 h-14 mx-auto" />}
              title="Flexible and scalable"
              description="No contract. No minimum term. Only pay when you need us and cancel anytime."
            />
          </div>
          <div className="w-auto m-auto">
            <Button
              type="secondary"
              label="View plans"
              onClick={() => (window.location.href = '#plans')}
            />
          </div>
        </PageSection>
        <PageSection
          className="bg-gray-50"
          id="sow"
          title="Apps, websites, hosting & more"
          subtitle="We are experts in most modern web technologies."
        >
          <div className="grid md:grid-cols-4 gap-12 p-16 font-bold border-4 border-black">
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
                <p key={index} className="pb-8 border-b-4 border-black">
                  {option}
                </p>
              );
            })}
          </div>
        </PageSection>
        <PageSection
          id="plans"
          title="Choose a plan that's right for you"
          subtitle="Top level service for a fraction of the price."
        >
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Plan
              title="Monthly"
              price="1,500"
              disclaimer="Pause or cancel anytime"
              options={[
                'Unlimited requests',
                'Unlimited support',
                'Unlimited users',
              ]}
              onClick={() => (
                window.open('https://buy.stripe.com/5kAg1ObIY2Jy2Zi4gn'),
                '_blank'
              )}
            />
            <Plan
              title="Quarterly"
              price="1,333"
              disclaimer="£4,000 + VAT paid quarterly"
              options={[
                'Unlimited requests',
                'Unlimited support',
                'Unlimited users',
              ]}
              onClick={() => (
                window.open('https://buy.stripe.com/5kAg1O7sI97W2Zi9AI'),
                '_blank'
              )}
            />
            <Plan
              title="Yearly"
              price="1,250"
              disclaimer="£15,000 + VAT paid annually"
              options={[
                'Unlimited requests',
                'Unlimited support',
                'Unlimited users',
              ]}
              onClick={() => (
                window.open('https://buy.stripe.com/fZe02Q3cs0BqczS7sB'),
                '_blank'
              )}
            />
            <div className="sm:col-span-3 lg:col-span-1 flex flex-col gap-4 p-8 bg-white">
              <p className="font-primary text-2xl">Book a Call</p>
              <p>
                Learn more about how D3J Digital works and how it can help you.
              </p>
              <p
                className="font-bold cursor-pointer"
                onClick={() => (
                  window.open('https://calendly.com/d3j/30min'), '_blank'
                )}
              >
                Book a call
              </p>
              <hr className="my-8" />
              <p className="font-primary text-2xl">Already subscribed?</p>
              <p>Awesome! You can manage your subscription at any time.</p>
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
          <div className="text-center">
            <Image
              src="/assets/logos/powered-by-stripe-badge.svg"
              width="300"
              height="40"
              alt="D3J Digital Limited"
            />
          </div>
        </PageSection>
        <PageSection
          className="bg-gray-50"
          id="faqs"
          title="FAQs"
          subtitle="Take a look at some of our most commonly asked questions."
        >
          <div className="">
            <AccordionGroup>
              <Accordion title="How are you different from a typical agency?">
                <p>
                  An typical agency charges for an amount of time or work. If
                  you change your mind or want other things done during or after
                  the development phase, you may be faced with extra costs. Our
                  pricing model is simple: you pay a flat monthly fee and can
                  ask for as many things as you want, when you want.
                </p>
              </Accordion>
              <Accordion title="Would it be better to hire a full-time developer?">
                <p>
                  Finding the right developer for the job can be time consuming
                  and costly. Mid-Senior level developer salaries start anywhere
                  from £30k+, not including equipment, training, pensions, etc.
                  Our fees are significantly cheaper than hiring a full-time
                  developer, and you get the added benefit of cancelling and
                  restarting your subscription when you want.
                </p>
              </Accordion>
              <Accordion title="How do requests work?">
                <p>
                  You will have access to a private job board where you add
                  requests to your backlog. You can only have one active request
                  at a time, which we aim to complete as soon as possible.
                </p>
              </Accordion>
              <Accordion title="What type of requests can I submit?">
                <p>
                  Anything, within reason. Examples of requests include bug
                  fixes, implementing new page designs, setting up plugins,
                  integrating with 3rd parties, and more.
                </p>
              </Accordion>
              <Accordion title="Do I really get unlimited requests?">
                <p>
                  It might sound too good, but it is true! You can add as many
                  requests to your backlog as you like, and we will keep working
                  through them.
                </p>
              </Accordion>
              <Accordion title="What if I'm not happy with the work?">
                <p>
                  We pride ourselves on delivering the highest quality work. If
                  you are not happy, we will do our best to work with you to
                  rectify any issues as soon as possible.
                </p>
              </Accordion>
              <Accordion title="How are payments handled?">
                <p>We use Stripe to manage payments and subscriptions.</p>
                <p>
                  We do not store or process any of your personal details on our
                  servers.
                </p>
              </Accordion>
              <Accordion title="Do you offer any refunds?">
                <p>
                  Unfortunately, due to the nature of the work, we do not offer
                  any refunds.
                </p>
              </Accordion>
            </AccordionGroup>
            <p className="mt-16 text-center">
              More questions? Email us at{' '}
              <a href="mailto:hello@d3j.digital" className="text-blue-500">
                hello@d3j.digital
              </a>
            </p>
          </div>
        </PageSection>
      </main>
      <footer className="flex flex-col gap-2 py-16 px-8 bg-black text-white text-center">
        <Image
          src="/assets/logos/logo-white.svg"
          width="140"
          height="115"
          alt="D3J Digital Limited"
        />
        <p>Company Number 14159497 | VAT Reg Number 423631324</p>
        <p>
          &copy; D3J Digital Limited {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
