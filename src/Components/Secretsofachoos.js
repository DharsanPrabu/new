import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from 'react';

function AudioImageText({ imageUrl, text, audioSource }) {
  return (
    <div className="flex items-center justify-center p-8  ">
      <div className="max-w-xl w-full ">
        <div className="flex ">
          <img src={imageUrl} alt="Image" className="mb-4 rounded-lg w-[100px] h-[100px]" />
          <div className="ml-6">
            <p className="text-xl mb-4">{text}</p>
            <audio controls className="w-[300px] ">
              <source src={audioSource} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

function Secretsofachoos() {
  const audioData = [
    {
      imageUrl: 'ach1.jpg',
      audioSource: 'audio.mpeg',
      text: 'Heading Text 1',
    },
    {
      imageUrl: 'ach2.jpg',
      audioSource: 'audio2.mpeg',
      text: 'Heading Text 2',
    },
    {
      imageUrl: 'ach3.jpg',
      audioSource: 'audio3.mpeg',
      text: 'Heading Text 3',
    },
    {
      imageUrl: 'ach4.jpg',
      audioSource: 'audio4.mpeg',
      text: 'Heading Text 4',
    },
    
  ];
  const audioDatas = [
    {
      imageUrl: 'ach1.jpg',
      audioSource: 'audio.mpeg',
      text: 'Heading Text 5',
    },
    {
      imageUrl: 'ach2.jpg',
      audioSource: 'audio2.mpeg',
      text: 'Heading Text 6',
    },
    {
      imageUrl: 'ach3.jpg',
      audioSource: 'audio3.mpeg',
      text: 'Heading Text 7',
    },
    {
      imageUrl: 'ach4.jpg',
      audioSource: 'audio4.mpeg',
      text: 'Heading Text 8',
    },
     
  ];
  return (
    <div className="">
      <Header />
      <div className="container mx-auto mt-10 ">
        <h1 className="text-5xl font-semibold my-4 text-center">Secret of Acchoos</h1>
      </div>
             <div className="flex justify-center mt-10 ">
                  <div className="border border-purple-200 rounded-3xl bg-purple-300">
                            {audioData.map((data, index) => (
                                  <AudioImageText
                                    key={index}
                                    imageUrl={data.imageUrl}
                                    text={data.text}
                                    audioSource={data.audioSource}
                                  />
                                ))}
                    </div>

                      <div className="border border-purple-200 ml-20 rounded-3xl bg-purple-300">
                              {audioDatas.map((data, index) => (
                                    <AudioImageText
                                      key={index}
                                      imageUrl={data.imageUrl}
                                      text={data.text}
                                      audioSource={data.audioSource}
                                    />
                                  ))}
                      </div>
             </div>

             <Footer/>
    </div>
  );
}

export default Secretsofachoos;
