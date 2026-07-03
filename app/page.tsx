"use client";
import {
  Box,
  Button,
  Flex,
  Text,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalBody,
  // ModalCloseButton,
  // useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import styles from "./page.module.css";
import { Tangerine } from "next/font/google";
import confetti from "canvas-confetti";
import YouTubePlayer from "./components/youtube";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayText, setDisplayText] = useState("Mama");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const words = [
    "Mama 💖",
    "Anuoluwapo 💕😹",
    "Anne ✨",
    "Ewe 🥰",
    "Twinnie ❤️‍🔥😻",
    "My Baby sis 👶💕😹",
    "My Best Friend 😍 🤜 🤛",
    "My Big head ❤️‍🔥😻",
    "My Love 💝",
    "Mini Mom 💕",
    "Stubborn Girl💖",
  ];

  const birthdayMessage = [
    {
      name: "Victoria",
      message: `There are some people who walk into your life so quietly that you never realize, in that moment, just how much they are about to change it. You are one of those people. It’s funny to think that we only met last year because it honestly feels like I’ve known you for so much longer. If someone had told me back then that we’d become this close, I probably wouldn’t have believed them. Yet here we are, and I can confidently say that meeting you has been one of the best things that happened to me. Thank you for being the kind of friend everyone hopes to find but so few people actually do. Thank you for always being there, for listening to me even when I repeat the same things over and over, for encouraging me when I feel like giving up, for celebrating my little wins as though they were your own, and for reminding me of my strength whenever I forget it myself. You have this beautiful way of making people feel seen, heard, and understood. Whenever life gets overwhelming, somehow you always know the right words to say. Even on days when you probably have your own struggles, you never fail to check up on me and make sure I’m okay. That kind of love and care is rare, and I hope you never doubt how deeply I appreciate it. You have become more than just a friend to me. You’re someone I trust, someone I feel safe with, someone whose presence brings me peace. You’ve seen different versions of me—the happy, the stressed, the confused, the emotional—and you’ve stayed through all of them. You never made me feel like I was too much. Instead, you reminded me that I was worthy of kindness, patience, and genuine friendship. Sometimes I sit back and wonder what I did to deserve someone like you. Our friendship wasn’t something I expected, but it has become something I cherish with all my heart. Life has a funny way of bringing the right people into our lives at exactly the right time, and I truly believe meeting you was one of God’s greatest gifts to me.Thank you for every laugh we’ve shared, every deep conversation, every random moment that turned into a beautiful memory, and every time you’ve chosen to stand beside me. Thank you for believing in me when I struggled to believe in myself. Thank you for your honesty, your loyalty, your patience, and your heart. I hope you know that I’ll always be here for you too. Just as you’ve been my shoulder to lean on, I want to be yours. Through every victory, every heartbreak, every dream, every challenge, and every chapter life brings, I pray our friendship continues to grow stronger. I want to celebrate your successes, comfort you in your difficult moments, and remind you every single day how amazing you are. Never forget how special you are. You bring so much light into the lives of everyone around you, especially mine. Your kindness, your strength, your beautiful heart, and the love you give so freely deserve to be returned a thousand times over. I pray that life rewards you with endless happiness, good health, peace of mind, opportunities beyond your imagination, and people who love you as genuinely as you love others. You deserve every beautiful thing this world has to offer. No matter where life takes us, I hope we’ll always have this friendship. Years from now, I want us to look back at all our memories and smile, grateful that one unexpected meeting turned into one of the strongest friendships we’ve ever known. Thank you for coming into my life when you did. Thank you for choosing to stay. Thank you for being my safe place, my biggest supporter, my constant source of encouragement, and one of the greatest blessings I’ve ever received. I love you more than words could ever fully express, and I will never stop being grateful that our paths crossed. Here’s to many more years of laughter, memories, inside jokes, late-night conversations, endless support, and a friendship that only grows deeper with time. Forever grateful for you. 
        With all my love,
        Your Forever Friend. ❤️
        You know say me I dey write normally😏❤️.`,
    },
    {
      name: "Your Home Boy",
      message: `Happy Birthday, Anne ❤️ It’s honestly funny how life works. We started out as kids with absolutely no idea what we were doing, and somehow we still ended up being friends all these years later. Looking back now, I realize those little moments we probably didn’t think much of became some of my favorite memories. You’ve always been someone who’s easy to be around, even when you’re being stubborn (yes, I had to mention that 😂). I don’t know if people tell you this enough, but your presence has a way of making people feel comfortable, and that’s something not everyone has. I hope this new year of your life brings you everything you’ve been praying and working for. May you keep growing into an even more amazing person, find happiness in the little things, and never lose that beautiful smile. May God continue to guide your steps, protect you, and open doors you never imagined. And please, as you’re getting older, 😂 Stay the same Anne we all know… just with a little more maturity (emphasis on little). Thank you for being a wonderful friend over the years. Whether we talked every day or disappeared for a while and picked up where we left off, the friendship has always been real. That’s something I genuinely appreciate. Here’s to more laughter, more memories, more random arguments about who’s right (even though it’s obviously me 😌), and many more birthdays to celebrate. Happy Birthday once again, Ewela🌚. Enjoy your day, eat plenty of cake , take lots of pictures, and make memories worth remembering. Wishing you nothing but love, peace, success, and endless happiness. Happy Birthday, Homegirl! ❤️🥂`,
    },
    {
      name: "Emmanuel your younger brother 😌",
      message: `Happy birthday to the best sister ever 🥹🥹❤️ You're such a caring person ( and you can be very strict too ooo 😂) always looking out for me, always making sure I'm well fed 😂😂. There is a lot to be said, but you already know ❤️. I hope this new age brings you everything good, all the love and blessings you keep giving out to everyone else. Love you loads 🥹❤️❤️ Enjoy your day! 🎂❤️`,
    },
    {
      name: "Adunni",
      message: `Happy birthday Twinnie😍 ..May this year be your best year yet❤️🫶🏼🥰❤️❤️`,
    },
    {
      name: "Your Lovely Sister",
      message: `To my dearest sister, my small mummy if I was asked about Anne, I’d say she looks like a mean big girl, but if asked on a deeper level, I’d say she’s the sweetest person beneath all of that hard girl, the best sister anyone could ask for, my daddy’s Oyinbo and my mum gist partner, Emma small mummy. In times coming, I love my sister more than i while growing up as kids because we always fought 😂, but now it’s so different and I would never imagine life without my sister.
        The original 2nd born who would stand up to anybody 😂, you don’t want to know. My sister defends me even in my back and that kind of love is rare, super supportive. I call her *MOST PRIZED POSSESSION* 😂😂only us know how that name came about 😂. Today I wish for only the best for you my love, happiness, peace of mind, good health, lots of love from those dear to you, may your light never dim or be cut short, may this not be your last birthday, have a blissful year ahead and amazing day today. I love you baby😍❤️`,
    },
    {
      name: "Your Homegirl",
      message: `Hey,baby girl 
        Have known you for just a short while and i know how genuine you are. Thank you for always listen to my rants and always telling you are here for me
        I love you 
        Have the most memorable day ever
        Xoxo Toyin♥️`,
    },
    {
      name: "OSUJI (as you kukuma save am for your phone)",
      message: `Hmm, where do i start? I've got of amazing things to say but I'm suddenly speechless 😹. Happy Birthday, My Love! 🎉🎂❤️, On this special day, I just want to remind you of how incredibly amazing you are. Every moment with you is a blessing, and I’m beyond grateful to have you in my life. Your kindness, strength, and love inspire me every day, and I can't imagine a world without your beautiful smile. You deserve all the happiness in the universe today and always. May this year bring you endless joy, success, and love—just as you have given me. I’ll always be here to celebrate you, cherish you, and walk beside you through every moment of life. Happy Birthday, my queen! I love you more than words can ever express and i'm so so proud of you Here is to Another year, another reason to celebrate you The incredible, kind, and absolutely irreplaceable person that you are. Somehow, with every trip around the sun, you shine even brighter, filling my world with love, laughter, and a little bit of that stubborn charm that makes you "you".  Watching you grow, chase your dreams, and light up every room you walk into is nothing short of magic. You’ve got this beautiful mix of strength and softness, fire and warmth, and I feel so lucky to be by your side.  
      So today, I hope you laugh until your stomach hurts, eat all the cake you want (I promise I won’t steal too many bites), and feel just how deeply you are loved—not just today, but every single day.  
      Here’s to another year of adventures, inside jokes, and me being your forever biggest fan. Love you endlessly. 💖🎂  
      **Your biggest hype squad, best friend, and forever love.** 💕. 
      Happy Birthday Mama ❤️🎁🎊`,
    },
  ];
  const galleryItems = [
    { type: "image", src: "/mama/1.jpeg", alt: "memory 1" },
    { type: "image", src: "/mama/2.jpg", alt: "memory 2" },
    { type: "image", src: "/mama/3.jpg", alt: "memory 3" },
    { type: "image", src: "/mama/4.jpg", alt: "memory 4" },
    { type: "image", src: "/mama/5.jpg", alt: "memory 5" },
    { type: "image", src: "/mama/6.jpg", alt: "memory 6" },
    { type: "image", src: "/mama/7.jpg", alt: "memory 7" },
    { type: "image", src: "/mama/8.jpg", alt: "memory 8" },
    { type: "image", src: "/mama/9.JPG", alt: "memory 9" },
    { type: "image", src: "/mama/10.jpg", alt: "memory 10" },
    { type: "image", src: "/mama/11.jpeg", alt: "memory 11" },
    { type: "image", src: "/mama/12.jpg", alt: "memory 12" },
    { type: "image", src: "/mama/13.JPG", alt: "memory 13" },
    { type: "image", src: "/mama/14.jpg", alt: "memory 14" },
    { type: "image", src: "/mama/15.jpg", alt: "memory 15" },
    { type: "image", src: "/mama/20.jpg", alt: "memory 20" },
    { type: "image", src: "/mama/21.jpg", alt: "memory 21" },
    { type: "image", src: "/mama/22.jpg", alt: "memory 22" },
    { type: "image", src: "/mama/23.jpg", alt: "memory 23" },
    { type: "video", src: "mama-vid/1.mp4" },
    { type: "video", src: "mama-vid/2.MP4" },
    { type: "video", src: "mama-vid/3.MP4" },
    { type: "video", src: "mama-vid/4.MP4" },
    { type: "video", src: "mama-vid/6.MP4" },
    { type: "video", src: "mama-vid/8.MP4" },
    { type: "video", src: "mama-vid/9.MP4" },
    { type: "video", src: "mama-vid/10.MP4" },
    { type: "video", src: "mama-vid/11.MP4" },
    { type: "video", src: "mama-vid/15.MP4" },
    { type: "video", src: "mama-vid/16.mp4" },
    { type: "video", src: "mama-vid/17.MP4" },
    { type: "video", src: "mama-vid/18.MP4" },
    { type: "video", src: "mama-vid/19.MP4" },
    { type: "video", src: "mama-vid/20.MP4" },
    { type: "video", src: "mama-vid/21.MP4" },
    { type: "video", src: "mama-vid/22.MP4" },
    { type: "video", src: "mama-vid/27.MP4" },
    { type: "video", src: "mama-vid/28.mp4" },
    { type: "video", src: "mama-vid/29.mp4" },
  ];

  const [totalItems, setTotalItems] = useState(galleryItems.length);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else {
      if (displayText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(10000);
  }, [displayText, isDeleting, currentIndex]);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleConfetti = () => {
    // First burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffed59", "#FFD700", "#FF69B4", "#4B0082", "#9400D3"],
    });

    // Follow up bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);

    // Final burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 },
      });
    }, 500);
  };

  return (
    <Box bg={`url(/backdrop.png), #222222`}>
      <Flex w={"100%"} pt={5}>
        <Image src="/logo.PNG" alt="text" width={200} height={50} />
      </Flex>
      {/* Big Display */}
      <Box display={"flex"} justifyContent={"center"} py={10} id="top" mt={-5}>
        <Flex
          className="banner-image"
          w={"82%"}
          h={"413px"}
          borderRadius={"10px"}
          position="relative"
          bg={`
            linear-gradient(263.48deg, rgba(0, 0, 0, 0.2) 1.24%, rgba(0, 0, 0, 0.48) 26.8%, rgba(0, 0, 0, 0.8) 98.76%),
            url('/mama/22.jpg')
          `}
          bgSize={"cover"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            flexDirection={"column"}
            gap={2}
            w={{ base: "90%", sm: "85%", md: "80%" }}
            className="banner-content"
            px={{ base: 4, md: 0 }}
          >
            <Text
              bg={"#A29999"}
              color={"#ffffff"}
              px={2}
              py={1}
              borderRadius={"10px"}
              fontSize={{ base: "8px", sm: "10px" }}
              fontWeight={500}
              w={"fit-content"}
              className="confetti-btn"
              onClick={handleConfetti}
              cursor={"pointer"}
            >
              Happy Birthday 🎉 🎊 🥳
            </Text>
            <Box
              fontSize={{ base: "24px", sm: "28px", md: "36px" }}
              fontWeight={600}
            >
              <Text color={"#ffffff"}>Happy Birthday</Text>
              <Text
                className="change"
                color={"#ffed59"}
                mt={{ base: -1, sm: -2, md: -3 }}
                fontSize={{ base: "5xl", md: "5xl" }}
                fontFamily={`tangerine`}
              >
                {displayText}
              </Text>
            </Box>
            <Text
              color={"#D0D5DD"}
              fontSize={{ base: "12px", sm: "14px", md: "16px" }}
              fontWeight={400}
            >
              Here is to 2🤫 years of being amazing
            </Text>
            <Button
              className="mail-button"
              bg={"#ffed59"}
              color={"#1C1C1E"}
              fontSize={{ base: "10px", sm: "12px" }}
              fontWeight={400}
              w={"fit-content"}
              borderRadius={"10px"}
              px={4}
              py={2}
              mt={2}
              onClick={() => {
                const mailsSection = document.getElementById("mails");
                if (mailsSection) {
                  mailsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              // onClick={onOpen}
              _hover={{ bg: "#ffed59" }}
              _active={{ bg: "#ffed59" }}
              _focus={{ bg: "#ffed59" }}
            >
              You've got mails 🤫🥳
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* About mama */}
      <Box w="100%" py={10} className="about">
        <Flex
          w={{ base: "95%", md: "90%", lg: "82%" }}
          mx="auto"
          flexDirection="column"
          gap={{ base: 6, md: 8, lg: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={4}
            px={4}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              textAlign="center"
              color="#ffffff"
            >
              Ever wondered what i think when i hear your name ?
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              textAlign="center"
              color="#FFDE59"
            >
              Hold on, I'll tell you right now
            </Text>
          </Box>

          {/* ANNE Letters */}
          {[
            {
              letter: "A",
              word: "ADMIRABLE",
              text: "Cause you commands respect effortlessly; Your actions, kindness, and grace inspire everyone around her to be better.",
              image: "/mama/7.jpg",
              imageFirst: true,
            },
            {
              letter: "N",
              word: "NUTURING",
              text: "Cause omo you care so deeply for the people you love, making you feel safe and completely supported even when they don't reciprocate it.",
              image: "/mama/15.jpg",
              imageFirst: false,
            },
            {
              letter: "N",
              word: "NOBLE",
              text: "You stay true, showing strength, and dignity in everything you do. Such a beautiful and rare soul. ",
              image: "/mama/12.jpg",
              imageFirst: true,
            },
            {
              letter: "E",
              word: "ENCHANTING",
              text: "Oh that smile of yours, your energy, your sense of humor lift the mood of any room she walks into and it never goes unnoticeable.",
              image: "/mama/10.jpg",
              imageFirst: false,
            },
          ].map((item, index) => (
            <Flex
              key={index}
              w={{ base: "100%", md: "90%", lg: "80%" }}
              gap={{ base: 4, md: 8, lg: 14 }}
              justifyContent="center"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              px={4}
            >
              {item.imageFirst ? (
                <>
                  <Box flex="1" maxW={{ base: "100%", md: "300px" }}>
                    <Image
                      src={item.image}
                      alt="Mama"
                      width={300}
                      height={300}
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Flex
                    flex="1"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    <Text
                      color="#ffed59"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="bold"
                    >
                      {item.letter} - {item.word}
                    </Text>
                    <Text
                      color="#ffffff"
                      fontSize={{ base: "3xl", md: "3xl" }}
                      fontWeight="bold"
                      fontFamily={`tangerine`}
                    >
                      {item.text}
                    </Text>
                  </Flex>
                </>
              ) : (
                <>
                  <Flex
                    flex="1"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                    textAlign={{ base: "center", md: "left" }}
                    order={{ base: 2, md: 1 }}
                  >
                    <Text
                      color="#ffed59"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="bold"
                    >
                      {item.letter} - {item.word}
                    </Text>
                    <Text
                      color="#ffffff"
                      fontSize={{ base: "3xl", md: "3xl" }}
                      fontWeight="bold"
                      fontFamily={`tangerine`}
                    >
                      {item.text}
                    </Text>
                  </Flex>
                  <Box
                    flex="1"
                    maxW={{ base: "100%", md: "300px" }}
                    order={{ base: 1, md: 2 }}
                  >
                    <Image
                      src={item.image}
                      alt="Mama"
                      width={300}
                      height={300}
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </>
              )}
            </Flex>
          ))}
        </Flex>
      </Box>

      {/* Birthday Wishes */}
      <Box className="birthday-cards" id="mails" w="100%" py={10}>
        <Flex
          w="100%"
          maxW="1200px"
          mx="auto"
          flexDirection="column"
          gap={4}
          px={[2, 4]}
        >
          <Text
            color="#ffffff"
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            textAlign={["center", "center"]}
          >
            You've got mails, Birthday girl 🎉 🎊 🥳
          </Text>
          <Box position="relative" w="100%" overflow="hidden">
            <Box className={styles["carousel-container"]}>
              {birthdayMessage.map((message, index) => (
                <Box
                  key={index}
                  className={`${styles.card} ${
                    expandedIndex === index ? styles.expanded : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <Box className={styles["card-content"]}>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="center"
                      mb={4}
                    >
                      From {message.name} 💝
                    </Text>
                    <Box
                      className={`${styles["card-message"]} ${tangerine.className}`}
                    >
                      {expandedIndex === index ? (
                        message.message
                      ) : (
                        <Text className={styles["card-preview"]}>
                          Click to read my birthday message...
                        </Text>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Memories */}
      <Box w="100%" py={10} className="memories">
        <Flex
          w={{ base: "95%", md: "90%", lg: "82%" }}
          mx="auto"
          flexDirection="column"
          gap={{ base: 6, md: 8, lg: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              textAlign="center"
              color={"#FFFFFF"}
            >
              Memories 💝
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              textAlign="center"
              color="#ffed59"
            >
              Here are Echoes of Yesterday, Treasures for Tomorrow.
            </Text>
          </Box>
          <Box className="memories-gallery">
            {/* Desktop and Tablet View */}
            <Box className={styles.galleryGrid}>
              {galleryItems.map((item, index) => {
                // Array of different animations
                const animations = [
                  "fade-up",
                  "fade-down",
                  "fade-right",
                  "fade-left",
                  "zoom-in",
                  "zoom-in-up",
                  "flip-left",
                  "flip-right",
                  "slide-up",
                  "slide-down",
                ];

                // Get animation based on index
                const animation = animations[index % animations.length];

                // Calculate delay
                const delay = (index % 5) * 100;

                return (
                  <Box
                    key={index}
                    className={styles.galleryItem}
                    gridColumn={index % 3 === 0 ? "span 2" : "span 1"}
                    gridRow={index % 5 === 0 ? "span 2" : "span 1"}
                    data-aos={animation}
                    data-aos-delay={delay}
                    data-aos-duration="1000"
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt as string}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <video
                        controls
                        playsInline
                        muted
                        loop
                        autoPlay
                        className={styles.video}
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Videos from well wishers */}
      {/* <Box w={"100%"} py={10} className="aww-section">
        <Flex
          w={{ base: "95%", md: "90%", lg: "82%" }}
          mx="auto"
          flexDirection="column"
          gap={{ base: 6, md: 8, lg: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              textAlign="center"
            >
              Happy Birthday to you 💝
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              textAlign="center"
              color="#ffed59"
            >
              I guess i might tag this the AWWN section cause Awwwwwwwwwwwwwwwn.
            </Text>
          </Box>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 6 }}
            w="100%"
            justifyContent="center"
            alignItems="center"
          >
            
            <Box
              w={{ base: "100%", md: "48%" }}
              h={{ base: "300px", sm: "400px", md: "500px" }}
            >
              <YouTubePlayer />
            </Box>
          </Flex>
        </Flex>
      </Box> */}

      {/* Footer */}
      <Box w={"100%"} pb={10} pt={{ base: 48, sm: 10, md: 10 }}>
        <Flex
          w={"95%"}
          mx="auto"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
          color={"#ffffff"}
          fontFamily={`tangerine`}
        >
          <Text fontSize={"3xl"} fontWeight="bold" textAlign="center">
            Happy Birthday to you 💝
          </Text>
          <Text fontSize={"3xl"} fontWeight="bold" textAlign="center">
            I love you so much 💝
          </Text>
          <Button
            className="mail-button"
            bg={"#ffed59"}
            color={"#1C1C1E"}
            fontSize={{ base: "3xl", sm: "3xl" }}
            fontWeight={400}
            w={"fit-content"}
            borderRadius={"10px"}
            px={6}
            py={8}
            mt={2}
            onClick={handleConfetti}
            _hover={{ bg: "#ffed59" }}
            _active={{ bg: "#ffed59" }}
            _focus={{ bg: "#ffed59" }}
          >
            Press me 🤫🥳
          </Button>
        </Flex>
      </Box>

      <Flex w={"100%"} pt={5} justifyContent={"flex-end"}>
        <Image src="/logo.PNG" alt="text" width={200} height={50} />
      </Flex>
    </Box>
  );
}
