import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Pricing.css';

function Pricing() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleGetStarted = (planName) => {
    navigate(`/Contact?subject=${planName} Plan Inquiry`);
  };

  const handleContactSales = () => {
    navigate('/Contact?subject=Sales Inquiry');
  };

  const handleAddToPlan = (addonName) => {
    navigate(`/Contact?subject=${addonName} Add-on Inquiry`);
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with automation",
      price: billingCycle === 'monthly' ? 29 : 290,
      features: [
        "Document Processing (100/month)",
        "Basic Workflow Automation",
        "Email Integration",
        "Standard Support",
        "5 User Licenses",
        "Basic Reporting"
      ],
      popular: false,
      icon: "🚀"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced automation needs",
      price: billingCycle === 'monthly' ? 79 : 790,
      features: [
        "Document Processing (500/month)",
        "Advanced Workflow Automation",
        "CRM & Accounting Integration",
        "Priority Support",
        "25 User Licenses",
        "Advanced Analytics",
        "Custom Workflows",
        "API Access"
      ],
      popular: true,
      icon: "⭐"
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations with complex requirements",
      price: billingCycle === 'monthly' ? 199 : 1990,
      features: [
        "Unlimited Document Processing",
        "Custom Automation Solutions",
        "Full System Integration",
        "24/7 Dedicated Support",
        "Unlimited User Licenses",
        "Custom Analytics Dashboard",
        "White-label Solutions",
        "On-premise Deployment"
      ],
      popular: false,
      icon: "🏢"
    }
  ];

  const addOns = [
    {
      name: "Additional Users",
      price: billingCycle === 'monthly' ? 5 : 50,
      description: "Add more team members to your plan"
    },
    {
      name: "Advanced Analytics",
      price: billingCycle === 'monthly' ? 15 : 150,
      description: "Enhanced reporting and business intelligence"
    },
    {
      name: "Custom Integration",
      price: billingCycle === 'monthly' ? 25 : 250,
      description: "Custom API development and system integration"
    },
    {
      name: "Priority Support",
      price: billingCycle === 'monthly' ? 10 : 100,
      description: "24/7 priority support with dedicated account manager"
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <motion.section 
        className="pricing-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Choose the perfect plan for your business needs. All plans include our core automation features.
        </motion.p>
        
        {/* Billing Toggle */}
    <motion.div
          className="billing-toggle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <button 
            className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <div className="toggle-slider"></div>
          </button>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </motion.div>
      </motion.section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans">
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
  >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`plan-btn ${plan.popular ? 'popular-btn' : ''}`} onClick={() => handleGetStarted(plan.name)}>
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="pricing-addons">
        <h2>Additional Services</h2>
        <p className="addons-subtitle">Enhance your plan with these powerful add-ons</p>
        <div className="addons-grid">
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              className="addon-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="addon-header">
                <h3>{addon.name}</h3>
                <div className="addon-price">
                  <span className="currency">$</span>
                  <span className="amount">{addon.price}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </div>
              <p>{addon.description}</p>
              <button className="addon-btn" onClick={() => handleAddToPlan(addon.name)}>Add to Plan</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Can I change my plan anytime?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated for the current billing period.</p>
          </motion.div>
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Is there a free trial available?</h3>
            <p>Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.</p>
          </motion.div>
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.</p>
          </motion.div>
          <motion.div
            className="faq-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Do you offer custom pricing for large teams?</h3>
            <p>Yes, we offer custom pricing for enterprise customers with 100+ users. Contact our sales team for a personalized quote.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of businesses that have transformed their operations with our automation solutions</p>
          <div className="cta-buttons">
            <button className="primary-cta-btn" onClick={() => handleGetStarted('Professional')}>Start Free Trial</button>
            <button className="secondary-cta-btn" onClick={handleContactSales}>Contact Sales</button>
          </div>
    </motion.div>
      </section>
    </div>
  );
}

export default Pricing;