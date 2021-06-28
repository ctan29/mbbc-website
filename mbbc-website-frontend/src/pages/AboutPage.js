import React from "react";
import { Link } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";

const AboutPage = () => (
  <>
    <h1 className="decorative-title">Greetings</h1>
    <div className="about-text center-wrapper">
      <p>Welcome to the Metropolitan Bible Baptist Church.</p>
      <p>
        You are invited to join our church services to learn about God, the
        Bible, and the principles of Christian living.
      </p>
      <p>
        As believers in Christ, it is our desire to share with you the faith we
        have in Christ, the joy of doing what God has commanded us to do, and
        the absolute assurance that one day God will take us to Heaven to be
        with Jesus Christ for all eternity.
      </p>
      <p>
        Could we take this opportunity to invite you to join with us this Sunday
        in Metropolitan Bible Baptist Church? Be blessed!
      </p>
    </div>
    <p className="about-quote center-wrapper">
      &ndash; By the members of Metropolitan Bible Baptist Church
    </p>
    <div className="center-wrapper">
      <Link to="/contact" className="link-button">
        FIND US TODAY
      </Link>
      <Link to="/statement-of-faith" className="link-button">
        READ OUR DOCTRINAL STATEMENT
      </Link>
    </div>
    <h2>Are You Saved?</h2>
    <p>
      In this day and time, it’s not often that someone offers an absolutely
      free gift. Yet here is the most wonderful and precious free gift
      especially for you! It has already been paid for by someone else. Please
      read on to find out more.
    </p>
    <p>
      This gift is <b>ETERNAL LIFE</b> in a glorious <b>Heaven.</b>
    </p>
    <p>
      It is difficult for men to accept the thought of this being a free gift.
      Man wants to earn everlasting life.
    </p>
    <p>
      The Holy Bible says: “For by grace are ye saved through faith; and that
      not of yourselves: it is the gift of God: Not of works, lest any man
      should boast.” (Ephesians 2:8-9) The Bible says: “…the gift of God is
      eternal life through Jesus Christ our Lord.” (Romans 6:23)
    </p>
    <p>
      A gift is not something we earn or work for. We receive gifts out of love.
      In fact, “GRACE” means: “Unmerited, or unearned favour.” If we work for
      something, it is not a gift, but a wage.
    </p>
    <p>
      <b>
        We earn death in hell, but God gives us Heaven through Jesus Christ!
      </b>
      (SPECIAL BOX?)
    </p>
    <p>
      The only wages we receive from God is Hell! “For the wages of sin is
      death…” (Romans 6:23a) “…and sin, when it is finished, bringeth forth
      death” (James 1:15b). “In flaming fire taking vengeance on them that know
      not God, and that obey not the gospel of our Lord Jesus Christ.” (2
      Thessalonians 1:8)
    </p>
    <p>
      The Lord Jesus Christ paid for this gift with His own dear shed blood on
      the cross. “…without shedding of blood is no remission.” (Hebrews 9:22b)
      “…the blood of Jesus Christ his Son cleanseth us from all sin.” (1 John
      1:7b) “But God commendeth his love toward us, in that, while we were yet
      sinners, Christ died for us.” (Romans 5:8)
    </p>
    <p>
      Receive this absolutely free gift <b>TODAY!</b> Come to God in humble
      prayer, admit your guilt as a sinner before a Holy God, turn to God from
      your sin by faith (repent), asking God to save you through the Lord Jesus
      Christ. “But as many as received him, to them gave he power to become the
      sons of God, even to them that believe on his name.” (John 1:12)
    </p>
    <p>
      “Testifying both to the Jews, and also to the Greeks, repentance toward
      God, and faith toward our Lord Jesus Christ.” (Acts 20:21) “For whosoever
      (YOU!!) shall call upon the name of the Lord shall be saved.” (Romans
      10:13 “ …behold, now is the accepted time, behold, now is the day of
      salvation.” (2 Corinthians 6:2b)
    </p>
    <p>
      Please let us know in writing (write your name and email below) if you
      have trusted Christ’s promise to save you and give you eternal life.
    </p>
    <h3>ADD INPUT HERE</h3>{" "}
    {/* placeholder 
    <AddCommentForm
        articleName={`/api/blog-article/${name}/add-comment`}
        setArticleInfo={setArticleInfo}
        displayFields={{ name: true, email: true, text: false }}
      />
    
    */}
    <AddCommentForm
      postRoute="/api/about/add-query"
      displayFields={{ name: true, email: true, text: false }}
    />
    <p>
      Note: The above plan of salvation was taken from Dr Macale’s latest book,
      “Education Catastrophe: The Curse of Ignorance,” which can be purchased
      online from Amazon.com
    </p>
    <h3>ADD LINK ABOVE</h3> {/* placeholder */}
  </>
);

export default AboutPage;
