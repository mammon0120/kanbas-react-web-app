import Anchors from "./Anchors";
import Forms from "./Forms";
import Photo from "./Photo";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>

        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>

        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>

          My favorite recipe:
          <ol id="wd-your-favorite-recipe">
            <li>Boiling the water.</li>
            <li>Put some tomatoes in it.</li>
            <li>Add some eggs in it.</li>
            <li>Add salt and make it tasty.</li>
          </ol>

          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order)
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>
          Your favorite books (in no particular order)
          <ul id="wd-your-books">
            <li>Harry Potter</li>
            <li>Twilight</li>
            <li>Lord of the Rings</li>
            <li>The Hunger Games</li>
            <li>The Da Vinci Code</li>
          </ul>
        </div>

        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>Q4</td>
                <td>2/2/21</td>
                <td>88</td>
              </tr>
              <tr>
                <td>Q5</td>
                <td>Q5</td>
                <td>2/1/21</td>
                <td>99</td>
              </tr>
              <tr>
                <td>Q6</td>
                <td>Q6</td>
                <td>2/22/21</td>
                <td>96</td>
              </tr>
              <tr>
                <td>Q7</td>
                <td>Q7</td>
                <td>2/23/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Q8</td>
                <td>Q8</td>
                <td>2/3/21</td>
                <td>92</td>
              </tr>
              <tr>
                <td>Q9</td>
                <td>Q9</td>
                <td>3/1/21</td>
                <td>93</td>
              </tr>
              <tr>
                <td>Q10</td>
                <td>Q10</td>
                <td>2/24/21</td>
                <td>91</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>93</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>

      <Photo />
      <Forms />
      <Anchors />




    </div>
  );
}
