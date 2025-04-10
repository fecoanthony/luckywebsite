import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: teal;
  color: #fff;
  line-height: 1.8;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
  font-size: 1.75rem;
  margin-top: 2rem;
  font-weight: bold;
  color: #ffe; /* softer contrast */
`;

const Paragraph = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  text-align: left;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const AboutUs = () => {
  return (
    <Section id="about">
      <ContentWrapper>
        <Title>About Us</Title>
        <SubTitle>Runway Fashion Designer Business: Elevating Style and Sophistication</SubTitle>

        <Paragraph>
          In the ever-evolving world of fashion, a Runway fashion designer business stands at the forefront of creativity and innovation.
          This business is dedicated to crafting exquisite, high-end clothing and accessories that not only make a statement but also redefine the boundaries of style.
        </Paragraph>

        <SubTitle>Our Mission</SubTitle>
        <Paragraph>
          At the heart of our business is a passion for fashion and a commitment to excellence. Our mission is to create stunning,
          runway-ready designs that inspire and empower individuals to express their unique sense of style. We strive to deliver exceptional quality,
          attention to detail, and a deep understanding of the latest fashion trends.
        </Paragraph>

        <SubTitle>Our Design Philosophy</SubTitle>
        <Paragraph>
          Our design philosophy is rooted in the belief that fashion should be both beautiful and functional. We draw inspiration from the world around us,
          incorporating elements of art, culture, and nature into our designs. From statement pieces to everyday wear, our collections are crafted to make a lasting impression.
        </Paragraph>

        <SubTitle>Our Collections</SubTitle>
        <Paragraph>
          Our Runway fashion designer business showcases a diverse range of collections, each with its own distinct character and charm.
        </Paragraph>
        <List>
          <ListItem>
            <strong>Haute Couture:</strong> Our haute couture collections are the epitome of luxury and sophistication, featuring intricate details and impeccable craftsmanship.
          </ListItem>
          <ListItem>
            <strong>Ready-to-Wear:</strong> Our ready-to-wear collections offer stylish, high-quality clothing that is accessible to a wider audience.
          </ListItem>
          <ListItem>
            <strong>Accessories:</strong> Our accessories, including handbags, shoes, and jewelry, add the perfect finishing touch to any outfit.
          </ListItem>
        </List>

        <SubTitle>Our Team</SubTitle>
        <Paragraph>
          Our team of skilled designers, pattern makers, and artisans work tirelessly to bring our vision to life. With years of experience and a deep understanding of the fashion industry, we are dedicated to delivering exceptional results.
        </Paragraph>
        <List>
          <ListItem>
            <strong>Lead Designer:</strong> Our lead designer is the creative force behind our collections, bringing a unique perspective and vision to each piece.
          </ListItem>
          <ListItem>
            <strong>Design Team:</strong> Our design team is comprised of talented individuals who share a passion for fashion and a commitment to excellence.
          </ListItem>
          <ListItem>
            <strong>Production Team:</strong> Our production team ensures every piece meets our high standards of quality and craftsmanship.
          </ListItem>
        </List>

        <SubTitle>Our Clients</SubTitle>
        <Paragraph>
          We are proud to work with a diverse range of clients, from fashionistas and celebrities to influencers and everyday individuals who appreciate high-end fashion.
        </Paragraph>
        <List>
          <ListItem>
            <strong>Fashionistas:</strong> Always on the lookout for the latest trends and statement pieces.
          </ListItem>
          <ListItem>
            <strong>Celebrities:</strong> We’ve had the privilege of working with stars who demand the best in fashion and luxury.
          </ListItem>
          <ListItem>
            <strong>Influencers:</strong> Creating stunning, Instagram-worthy pieces that reflect their unique sense of style.
          </ListItem>
        </List>

        <SubTitle>Our Services</SubTitle>
        <List>
          <ListItem>
            <strong>Custom Design:</strong> Bespoke pieces tailored to our clients' individual needs and preferences.
          </ListItem>
          <ListItem>
            <strong>Fashion Consulting:</strong> Expert advice on style, wardrobe building, and fashion trends.
          </ListItem>
          <ListItem>
            <strong>Styling:</strong> Creating stunning looks for photo shoots, runway shows, and special events.
          </ListItem>
        </List>

        <SubTitle>Conclusion</SubTitle>
        <Paragraph>
          Our Runway fashion designer business is dedicated to pushing the boundaries of fashion and luxury. With a passion for creativity,
          a commitment to excellence, and a deep understanding of the fashion industry, we are poised to make a lasting impact on the world of fashion.
        </Paragraph>
      </ContentWrapper>
    </Section>
  );
};

export default AboutUs;
