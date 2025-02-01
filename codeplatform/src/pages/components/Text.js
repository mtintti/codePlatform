

/*
export default function TextStatement() {

  const heading = "Search & Filters";
  const text = "Stop wasting time scrolling through endless lists! With our smart search feature, you can quickly find problems based on topics you actually care about. Want to practice array manipulation? Looking for string-based puzzles? Simply select your preferred topics or type in a keyword, and we’ll show you challenges that match what you're looking for.";
  const headingChars = splitStringRegex(heading);
  const textChars = splitStringRegex(text);

  console.log("By regex: ", textChars);

  return (
    <div className='justify-center flex items-center bg-gray-200'>
      <div className='max-w-5xl text-2xl font-semibold py-10 px-8 text-left'>
        {heading.map((char, index) => {
          <motion.span key={`heading-${index}`} transition={{ duration: 0.5 }} className='text-4xl py-4'>
            {char}
          </motion.span>
        })}
        {textChars.map((char, index) => {
          <motion.span key={`text-${index}`} transition={{ duration: 0.35 }} className='font-light'>
            {char}
          </motion.span>
        })}
      </div>
    </div>
  )
}
*/

import { motion } from "framer-motion";
import { splitStringRegex } from "@/utils/splitStringRegex";

const revealHeaderAnimation = {
  hidden: { opacity: 0, y: 30 },  // Start off-screen and invisible
  reveal: { opacity: 1, y: 0 },   // Transition to visible and on-screen
};

const revealAnimation = {
  hidden: { opacity: 0 },  // Start off-screen and invisible
  reveal: { opacity: 1 },   // Transition to visible and on-screen
};

export default function TextStatement() {
  const heading = "Search & Filters";
  const text =
    "Stop wasting time scrolling through endless lists! With our smart search feature, you can quickly find problems based on topics you actually care about. Want to practice array manipulation? Looking for string-based puzzles? Simply select your preferred topics or type in a keyword, and we’ll show you challenges that match what you're looking for.";

    const heading2 = "Challenges for Every Level";
  const text2 =
    "We know that everyone learns at their own pace, which is why our challenges are categorized by difficulty. Whether you’re just starting out with easy problems like Two Sum or pushing yourself with advanced topics like maximum lexicographical order sorting, there’s always something new to tackle.";
    const heading3 = "A Clean & Intuitive Experience";
    const text3 =
      "We believe that coding practice should be as smooth as possible. Our app is designed with a clean and user-friendly interface, making it simple to browse, search, and filter challenges effortlessly.";
    //const headingChars = splitStringRegex(heading);
  const textChars = splitStringRegex(text);
  const textChars2 = splitStringRegex(text2);
  const textChars3 = splitStringRegex(text3);

  return (
    <div className="bg-gray-200 justify-center flex flex-col items-center space-y-2  pb-8">
      <div className='max-w-4xl drop-shadow-md rounded-md'>
        <div className='max-w-7xl text-2xl font-semibold py-10 px-5 text-left'>
          <motion.div
          //initial="hidden"
          //whileInView="reveal"

          //transition={{ staggerChildren: 0.02 }}
          >

            <motion.span
              //key={`heading-${index}`}
              //transition={{ duration: 0.5 }}
              //variants={revealHeaderAnimation}
              className='text-4xl py-4'
            >
              {heading}
            </motion.span>

          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.015 }}
          >
            {textChars.map((char, index) => (
              <motion.span
                //key={char}
                key={`text-${index}`}
                transition={{ duration: 0.35 }}
                variants={revealAnimation}
                className='font-light'
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='max-w-4xl drop-shadow-md rounded-md'>
        <div className='max-w-7xl text-2xl font-semibold pt-10 py-10 px-5 text-left'>
          <motion.div
          //initial="hidden"
          //whileInView="reveal"

          //transition={{ staggerChildren: 0.02 }}
          >

            <motion.span
              //key={`heading-${index}`}
              //transition={{ duration: 0.5 }}
              //variants={revealHeaderAnimation}
              className='text-4xl py-4'
            >
              {heading2}
            </motion.span>

          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.015 }}
          >
            {textChars2.map((char, index) => (
              <motion.span
                //key={char}
                key={`text-${index}`}
                transition={{ duration: 0.35 }}
                variants={revealAnimation}
                className='font-light'
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='rounded-md max-w-4xl drop-shadow-md'>
        <div className='max-w-7xl text-2xl font-semibold py-10 px-5 text-left'>
          <motion.div
          //initial="hidden"
          //whileInView="reveal"

          //transition={{ staggerChildren: 0.02 }}
          >

            <motion.span
              //key={`heading-${index}`}
              //transition={{ duration: 0.5 }}
              //variants={revealHeaderAnimation}
              className='text-4xl py-4'
            >
              {heading3}
            </motion.span>

          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="reveal"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.015 }}
          >
            {textChars3.map((char, index) => (
              <motion.span
                //key={char}
                key={`text-${index}`}
                transition={{ duration: 0.35 }}
                variants={revealAnimation}
                className='font-light'
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

  );
}


/* <p className='text-4xl py-4'>{heading}</p>
        <p className='font-light'>{text}</p> */