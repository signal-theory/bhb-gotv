import React from "react"
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, RedditIcon, TwitterIcon, LinkedinIcon } from "react-share";

const SocialShare = (props) => {
  return (
    <div className="share-popup">
      <FacebookShareButton
        url={props.shareURL}
        quote={props.title}
        hashtag={props.hashtag0}
        description={props.description}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton
        title={props.title}
        summary={props.description}
        source={props.shareURL}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        title={props.title}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TwitterShareButton
        title={props.title}
        url={props.shareURL}
        hashtags={[props.hashtag0, props.hashtag1]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  )
}
export default SocialShare