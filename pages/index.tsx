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
import Marquee from 'react-fast-marquee';
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
        <title>Web Development as a Subscription | D3J Digital</title>
        <meta
          name="description"
          content="Save thousands on recruitment, agency and contractor fees. Get unlimited web development services for one fixed monthly price. No contract. Cancel anytime."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-body">
        <PageSection
          className="min-h-screen justify-center items-center font-primary text-center bg-black text-white"
          id="home"
        >
          <Image
            src="/assets/logos/logo-white.svg"
            width="200"
            height="115"
            alt="D3J Digital Limited"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed">
            Unlimited Web Development
            <span className="ml-3 lg:ml-0 sm:block">
              at a fixed monthly price.
            </span>
          </h1>
          <Button
            label="See Plans"
            onClick={() => (window.location.href = '#plans')}
          />
        </PageSection>
        <Marquee
          className="p-8 bg-yellow text-black font-primary text-2xl"
          speed={50}
          gradient={false}
        >
          <p className="mx-8">Webflow</p>
          <p className="mx-8">WordPress</p>
          <p className="mx-8">Elementor</p>
          <p className="mx-8">WooCommerce</p>
          <p className="mx-8">Magento</p>
          <p className="mx-8">Shopify</p>
          <p className="mx-8">Laravel</p>
          <p className="mx-8">Zend Framework</p>
          <p className="mx-8">React</p>
          <p className="mx-8">Vue</p>
          <p className="mx-8">Cordova</p>
          <p className="mx-8">Google Cloud</p>
          <p className="mx-8">AWS</p>
          <p className="mx-8">Digital Ocean</p>
        </Marquee>
        <PageSection className="bg-gray-50" id="benefits" title="Benefits">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <Benefit
              icon={<CheckBadgeIcon className="w-10 h-10 mx-auto" />}
              title="Private Job Board"
              description="Easily keep track of requests, progress, and communication via a private Trello board."
            />
            <Benefit
              icon={<CurrencyPoundIcon className="w-10 h-10 mx-auto" />}
              title="Fixed Monthly Price"
              description="No quotes, no invoices, no hidden surprises. Just the same price each month."
            />
            <Benefit
              icon={<ChevronDoubleDownIcon className="w-10 h-10 mx-auto" />}
              title="Keep Overheads Low"
              description="Cheaper than a full-time employee and agency, with some amazing tax incentives."
            />
            <Benefit
              icon={<UserCircleIcon className="w-10 h-10 mx-auto" />}
              title="Dedicated Developer"
              description="Your on-hand industry expert is there to work with you every step of the way."
            />
            <Benefit
              icon={<ChartBarSquareIcon className="w-10 h-10 mx-auto" />}
              title="Unlimited Requests"
              description="Got an issue with your site or want a new feature building? It's all included."
            />
            <Benefit
              icon={<XCircleIcon className="w-10 h-10 mx-auto" />}
              title="Cancel Anytime"
              description="No contract. No minimum term. Only pay when you need us and cancel anytime."
            />
          </div>
        </PageSection>
        <PageSection id="process" title="Get started in 3 easy steps">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="col-span-1 gap-4 mx-auto text-center">
              <Image
                src="/assets/images/step-1.svg"
                width="200"
                height="115"
                alt="Step 1"
              />
              <p className="text-xl mt-6 mb-4 font-bold">Choose a plan</p>
              <p className="md:w-1/2 md:mx-auto">
                Have a look at our plans below and choose the right one for you.
                The longer you commit, the more you save.
              </p>
            </div>
            <div className="col-span-1 gap-4 mx-auto text-center">
              <Image
                src="/assets/images/step-2.svg"
                width="200"
                height="115"
                alt="Step 2"
              />
              <p className="text-xl mt-6 mb-4 font-bold">
                Access your job board
              </p>
              <p className="md:w-1/2 md:mx-auto">
                Get invited to your private job board, where you can add
                requests, ask questions, and keep track of progress.
              </p>
            </div>
            <div className="col-span-1 gap-4 mx-auto text-center">
              <Image
                src="/assets/images/step-3.svg"
                width="200"
                height="115"
                alt="Step 3"
              />
              <p className="text-xl mt-6 mb-4 font-bold">Sit back and relax</p>
              <p className="md:w-1/2 md:mx-auto">
                We will begin to work through your requests so you can sit back
                and relax, knowing everything is taken care of.
              </p>
            </div>
          </div>
        </PageSection>
        <PageSection
          className="bg-black text-white"
          id="example"
          title="Have a look at an example job board"
          subtitle="Get an idea of how we manage our clients"
        >
          <div className="w-auto m-auto">
            <Button
              label="Show Me"
              onClick={() => (
                window.open('https://trello.com/b/5TouXNeb/example-board'),
                '_blank'
              )}
            />
          </div>
        </PageSection>
        <PageSection id="plans" title="Plans">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="grid-cols-1">
              <Plan
                title="Monthly"
                description="No contract. Cancel anytime."
                price="1,500"
                options={[
                  'Unlimited Requests',
                  'Unlimited Support',
                  'Cancel Anytime',
                ]}
                onClick={() => (
                  window.open('https://buy.stripe.com/5kAg1ObIY2Jy2Zi4gn'),
                  '_blank'
                )}
              />
            </div>
            <div className="grid-cols-1">
              <Plan
                title="Quarterly"
                description="£4,000 + VAT billed quarterly."
                price="1,333"
                options={[
                  'Unlimited Requests',
                  'Unlimited Support',
                  'Cancel Anytime',
                ]}
                onClick={() => (
                  window.open('https://buy.stripe.com/5kAg1O7sI97W2Zi9AI'),
                  '_blank'
                )}
              />
            </div>
            <div className="grid-cols-1">
              <Plan
                title="Yearly"
                description="£15,000 + VAT billed yearly."
                price="1,250"
                options={[
                  'Unlimited Requests',
                  'Unlimited Support',
                  'Cancel Anytime',
                ]}
                onClick={() => (
                  window.open('https://buy.stripe.com/fZe02Q3cs0BqczS7sB'),
                  '_blank'
                )}
              />
            </div>
          </div>
        </PageSection>
        <PageSection
          className="bg-primary"
          id="upsell"
          title="Looking for a new website?"
          subtitle="Keep an eye out for our bespoke plan coming soon"
        ></PageSection>
        <PageSection id="faqs" title="FAQs">
          <div className="md:w-2/3 lg:w-1/2 md:mx-auto">
            <AccordionGroup>
              <Accordion title="Do I need a website / system already?">
                <p>
                  Yes! We are currently taking requests from those who already
                  have a website or system. Due to our current capacity, your
                  website or system must be built in one of the following.
                </p>
                <p>
                  <span className="font-bold">CMS:</span> Webflow, WordPress,
                  Elementor
                </p>
                <p>
                  <span className="font-bold">Ecommerce:</span> WooCommerce,
                  Shopify, Magento
                </p>
                <p>
                  <span className="font-bold">PHP Frameworks:</span> Laravel,
                  Zend
                </p>
                <p>
                  <span className="font-bold">JS Libraries:</span> React,
                  Next.js, Vue, Nuxt.js
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
                  integrating with 3rd parties, etc.
                </p>
              </Accordion>
              <Accordion title="Do I really get unlimited requests?">
                <p>
                  It might sound too good, but it is true! You can add as many
                  requests to your backlog as you like, and we will keep working
                  through them.
                </p>
              </Accordion>
              <Accordion title="How are you different from an agency?">
                <p>
                  An agency typically charges for an amount of time or work. If
                  you change your mind or want other things done during or after
                  the development phase, you may be faced with extra costs. Our
                  pricing model is simple: you pay a flat monthly fee and can
                  have unlimited requests, meaning we can complete any number of
                  jobs in a month, depending on their complexity.
                </p>
              </Accordion>
              <Accordion title="Would it be better to hire a full-time developer?">
                <p>
                  Finding the right developer for the job can be time consuming
                  and costly. Mid-Senior level developer salaries start anywhere
                  from £30k+, not including equipment, training, pensions, etc.
                  Our fees are significantly cheaper than hiring a full-time
                  developer, and you get the added benefit cancelling or
                  restarting your subscription when it suits.
                </p>
                <p>
                  Our fees are significantly cheaper than hiring a full-time
                  developer and you get the added benefit cancelling or
                  restarting your subscription when it suits.
                </p>
              </Accordion>
              <Accordion title="What if I'm not happy with the work?">
                <p>
                  We pride ourselves on delivering the highest quality work. If
                  you are not happy, we will do our best to work with you to
                  rectify any issues as soon as possible.
                </p>
              </Accordion>
              <Accordion title="Do you offer any refunds?">
                <p>
                  Unfortunately, due to the nature of the work, we do not offer
                  any refunds.
                </p>
              </Accordion>
              <Accordion title="How are payments handled?">
                <p>
                  We use Stripe to manage payments and subscriptions. We do not
                  store or process any of your personal details on our servers.
                </p>
              </Accordion>
            </AccordionGroup>
          </div>
        </PageSection>
      </main>
      <footer className="flex flex-col gap-2 py-16 px-8 bg-black text-white text-center">
        <Image
          src="/assets/logos/logo-white.svg"
          width="200"
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
