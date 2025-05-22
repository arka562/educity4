import React from "react";
import "./fullStack.css";

const DigitalMarketing = () => {
  return (
    <div className="study-container">
      <h1>Digital Marketing Study Guide</h1>
      <p className="study-subtitle">
        A Complete Overview for Learners and Professionals
      </p>

      <section className="study-section">
        <h2>1. What is Digital Marketing?</h2>
        <p>
          Digital marketing involves using digital channels to promote or market
          products and services to consumers and businesses. It includes a
          variety of strategies like SEO, PPC, content marketing, social media
          marketing, and more.
        </p>
      </section>

      <section className="study-section">
        <h2>2. Types of Digital Marketing</h2>
        <ul>
          <li>
            <strong>Search Engine Optimization (SEO)</strong>
          </li>
          <li>
            <strong>Pay-Per-Click (PPC) Advertising</strong>
          </li>
          <li>
            <strong>Content Marketing</strong>
          </li>
          <li>
            <strong>Email Marketing</strong>
          </li>
          <li>
            <strong>Affiliate Marketing</strong>
          </li>
          <li>
            <strong>Influencer Marketing</strong>
          </li>
          <li>
            <strong>Mobile Marketing</strong>
          </li>
          <li>
            <strong>Video Marketing</strong>
          </li>
        </ul>
      </section>

      <section className="study-section">
        <h2>3. SEO (Search Engine Optimization)</h2>
        <p>
          Improving website visibility in organic search engine results using
          techniques such as:
        </p>
        <ul>
          <li>On-page SEO (meta tags, content quality, internal linking)</li>
          <li>Off-page SEO (backlinks, domain authority)</li>
          <li>Technical SEO (site speed, mobile-friendliness)</li>
        </ul>
      </section>

      <section className="study-section">
        <h2>4. Social Media Marketing (SMM)</h2>
        <p>Promoting content or services through platforms like:</p>
        <ul>
          <li>Facebook, Instagram, LinkedIn, Twitter, Pinterest</li>
          <li>
            Running Ads, engaging with followers, influencer collaborations
          </li>
        </ul>
      </section>

      <section className="study-section">
        <h2>5. Email Marketing</h2>
        <p>
          Sending targeted messages to groups of people via email for
          promotions, updates, or personalized content.
        </p>
        <ul>
          <li>Newsletters</li>
          <li>Product recommendations</li>
          <li>Transactional emails</li>
        </ul>
      </section>

      <section className="study-section">
        <h2>6. PPC (Pay-Per-Click) Advertising</h2>
        <p>
          PPC involves paying for ads that appear on search engines or social
          platforms. You pay only when someone clicks your ad.
        </p>
        <ul>
          <li>Google Ads</li>
          <li>Facebook Ads</li>
          <li>LinkedIn Ads</li>
        </ul>
      </section>

      <section className="study-section">
        <h2>7. Web Analytics</h2>
        <p>
          Tools and techniques to track user behavior and performance of digital
          campaigns.
        </p>
        <ul>
          <li>Google Analytics</li>
          <li>Heatmaps (Hotjar)</li>
          <li>Conversion Rate Optimization</li>
        </ul>
      </section>

      <section className="study-section">
        <h2>8. Tools for Digital Marketing</h2>
        <div className="grid-container">
          <div className="tool-card">
            <h4>Google Analytics</h4>
            <p>Website performance tracking</p>
          </div>
          <div className="tool-card">
            <h4>SEMrush / Ahrefs</h4>
            <p>SEO & keyword research</p>
          </div>
          <div className="tool-card">
            <h4>Mailchimp</h4>
            <p>Email campaigns</p>
          </div>
          <div className="tool-card">
            <h4>Canva</h4>
            <p>Graphic designing for content</p>
          </div>
        </div>
      </section>

      <section className="study-section">
        <h2>9. Certifications</h2>
        <ul>
          <li>Google Digital Garage</li>
          <li>HubSpot Inbound Marketing</li>
          <li>Meta Blueprint</li>
          <li>LinkedIn Learning Courses</li>
        </ul>
      </section>

      <section className="study-section">
        <h2>10. Career Opportunities</h2>
        <ul>
          <li>Digital Marketing Executive</li>
          <li>SEO Analyst</li>
          <li>Social Media Manager</li>
          <li>Performance Marketing Specialist</li>
        </ul>
      </section>

      <div className="study-footer">
        <p>
          Last Updated: April 2025 | For educational and career guidance
          purposes only.
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
