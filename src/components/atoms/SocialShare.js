import React from "react"
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, RedditIcon, TwitterIcon, LinkedinIcon } from "react-share";

const SocialShare = (props) => {
  return (
    <div className="share-popup">
      <FacebookShareButton
        url={props.shareURL}
        quote={props.description}
        hashtag={props.hashtag0}
        description={props.description}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={props.shareURL}
        title={props.title}
        source="Babes Helpin Babes at Signal Theory"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={props.shareURL}
        title={props.title}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TwitterShareButton
        title={props.description}
        url={props.shareURL}
        hashtags={[props.hashtag0, props.hashtag1]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}
export default SocialShare