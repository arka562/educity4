import React from "react";
import "./dataScience.css"; // Make sure this CSS file contains the necessary styles

const DataScience = () => {
  return (
    <div className="study-container">
      <h1>Data Science & Artificial Intelligence Study Guide</h1>
      <p className="study-subtitle">
        A comprehensive guide covering Python, TensorFlow, PyTorch, and machine
        learning algorithms
      </p>

      {/* Section 1: Data Science */}
      <div className="study-section">
        <h2>Introduction to Data Science</h2>
        <div className="component-card">
          <p>
            <strong>Definition:</strong> Data Science is a multidisciplinary
            field that uses scientific methods, processes, algorithms, and
            systems to extract knowledge and insights from structured and
            unstructured data.
          </p>
          <p>
            <strong>Importance:</strong> It facilitates decision-making based on
            data-driven insights across various industries, such as healthcare,
            finance, and marketing.
          </p>
        </div>

        <h3>Key Components of Data Science</h3>
        <div className="grid-container">
          {[
            {
              title: "Data Collection",
              desc: "Gathering data from various sources such as databases, APIs, and web scraping.",
            },
            {
              title: "Data Cleaning",
              desc: "Preprocessing data by handling missing values, outliers, and inconsistencies.",
            },
            {
              title: "Data Analysis",
              desc: "Exploring and analyzing data to uncover patterns using statistical methods.",
            },
            {
              title: "Data Visualization",
              desc: "Using tools like Matplotlib, Seaborn, or visualization libraries to create graphical representations of data.",
            },
            {
              title: "Machine Learning",
              desc: "Implementing algorithms to build predictive models based on data.",
            },
          ].map((item, i) => (
            <div className="grid-item" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: AI */}
      <div className="study-section">
        <h2>Introduction to Artificial Intelligence (AI)</h2>
        <div className="component-card">
          <p>
            <strong>Definition:</strong> Artificial Intelligence refers to
            machines or systems that mimic human intelligence to perform tasks
            such as learning, reasoning, and problem-solving.
          </p>
        </div>

        <h3>Types of AI</h3>
        <div className="grid-container">
          <div className="grid-item">
            <h4>Narrow AI</h4>
            <p>
              Specialized AI that performs a specific task (e.g., voice
              assistants like Siri).
            </p>
          </div>
          <div className="grid-item">
            <h4>General AI</h4>
            <p>
              A theoretical form of AI that performs any intellectual task that
              a human can do.
            </p>
          </div>
        </div>

        <h3>Key Concepts in AI</h3>
        <div className="grid-container">
          <div className="grid-item">
            <h4>Machine Learning (ML)</h4>
            <p>
              A subset of AI focused on building systems that learn from data
              and improve over time.
            </p>
          </div>
          <div className="grid-item">
            <h4>Deep Learning</h4>
            <p>
              A further subset of ML that uses neural networks with multiple
              layers to analyze various levels of features in data.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Python for DS & AI */}
      <div className="study-section">
        <h2>Python for Data Science & AI</h2>
        <div className="component-card">
          <p>
            <strong>Overview:</strong> Python is one of the most popular
            programming languages for data science and AI due to its simplicity
            and the availability of powerful libraries.
          </p>
        </div>

        <h3>Important Python Libraries</h3>
        <div className="grid-container">
          <div className="grid-item">
            <h4>NumPy</h4>
            <p>
              Provides support for arrays, matrices, and mathematical functions.
            </p>
            <pre className="code-block">
              <code>
                import numpy as np{"\n"}
                arr = np.array([1, 2, 3, 4]){"\n"}
                print(arr)
              </code>
            </pre>
          </div>
          <div className="grid-item">
            <h4>Pandas</h4>
            <p>
              Offers data structures like DataFrames for data manipulation and
              analysis.
            </p>
            <pre className="code-block">
              <code>
                {`import pandas as pd
data = { "Name": ["Alice", "Bob"], "Age": [25, 30] }
df = pd.DataFrame(data)
print(df)`}
              </code>
            </pre>
          </div>
          <div className="grid-item">
            <h4>Matplotlib and Seaborn</h4>
            <p>Libraries for data visualization.</p>
            <pre className="code-block">
              <code>
                import matplotlib.pyplot as plt{"\n"}
                import seaborn as sns{"\n"}
                sns.scatterplot(x='Age', y='Name', data=df){"\n"}
                plt.show()
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Section 4: ML Algorithms */}
      <div className="study-section">
        <h2>Machine Learning Algorithms</h2>
        <div className="component-card">
          <p>
            Machine Learning is divided into several categories, including
            supervised, unsupervised, and reinforcement learning.
          </p>
        </div>

        <h3>Supervised Learning</h3>
        <div className="component-card">
          <p>
            <strong>Definition:</strong> In supervised learning, the model is
            trained on labeled data, meaning the model learns from input-output
            pairs.
          </p>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <h4>Linear Regression</h4>
            <p>Used for predicting continuous values.</p>
            <pre className="code-block">
              <code>
                from sklearn.linear_model import LinearRegression{"\n"}X = [[1],
                [2], [3], [4]]{"\n"}y = [2, 3, 4, 5]{"\n"}
                model = LinearRegression(){"\n"}
                model.fit(X, y){"\n"}
                print(model.predict([[5]]))
              </code>
            </pre>
          </div>
          <div className="grid-item">
            <h4>Logistic Regression</h4>
            <p>Used for binary classification.</p>
          </div>
          <div className="grid-item">
            <h4>Decision Trees</h4>
            <p>Tree-like model used for classification and regression tasks.</p>
          </div>
          <div className="grid-item">
            <h4>Random Forest</h4>
            <p>
              An ensemble method that uses multiple decision trees to improve
              accuracy.
            </p>
          </div>
        </div>

        <h3>Unsupervised Learning</h3>
        <div className="component-card">
          <p>
            <strong>Definition:</strong> In unsupervised learning, the model
            works with unlabeled data, typically trying to find patterns or
            groupings.
          </p>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <h4>K-Means Clustering</h4>
            <p>Groups data into K distinct clusters.</p>
          </div>
          <div className="grid-item">
            <h4>Principal Component Analysis (PCA)</h4>
            <p>
              Reduces the dimensionality of data while retaining most of the
              variance.
            </p>
          </div>
        </div>

        <h3>Reinforcement Learning</h3>
        <div className="component-card">
          <p>
            <strong>Definition:</strong> A type of ML where an agent learns to
            make decisions by taking actions in an environment to maximize
            cumulative reward.
          </p>
        </div>

        <div className="grid-item">
          <h4>Q-Learning</h4>
          <p>
            A model-free RL algorithm to learn the value of an action in a
            particular state.
          </p>
        </div>
      </div>

      {/* Section 5: Deep Learning Libraries */}
      <div className="study-section">
        <h2>Deep Learning Libraries: TensorFlow and PyTorch</h2>
        <div className="component-card">
          <p>
            Deep learning frameworks make it easier to build and train complex
            neural networks.
          </p>
        </div>

        <h3>TensorFlow</h3>
        <div className="component-card">
          <p>
            <strong>Overview:</strong> An open-source deep learning library
            developed by Google, useful for building large-scale neural
            networks.
          </p>
        </div>

        <ul>
          <li>
            <strong>Tensors:</strong> The core data structure, multidimensional
            arrays.
          </li>
          <li>
            <strong>Graphs:</strong> TensorFlow uses computational graphs to
            visualize and optimize neural networks.
          </li>
        </ul>

        <h4>Basic Example</h4>
        <pre className="code-block">
          <code>
            import tensorflow as tf{"\n"}a = tf.constant(2){"\n"}b =
            tf.constant(3){"\n"}c = a + b{" \n"} print(c)
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DataScience;
