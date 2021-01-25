import React from 'react';
import { PageWrapper, 
    PageContainer, 
    CoverBoxWrapper, 
    BoxListing, 
    BoxListingCover, 
    TopCoverBox, 
    StyledPlayButton, 
    BottomCoverBox, 
    SecondaryHeading, 
    StyledTitlePricingBox, 
    InfoHeader, 
    StyledCardInfo, 
    CoverWrap, 
    LoaderWrapper, 
    ProfilePicture,
    FavoriteIconDiv,
    IndustryDiv,
    NameDiv,
    VideoRatingDiv,
    ProfileLink } from './styled';
import Header from '../../components/Header';
import StarListing from '../../components/StarListing';
// import ScrollList from '../../components/ScrollList';
import { Footer } from '../../components/Footer';
import Loader from '../../components/Loader';

/* ---------- start modifying ----------*/
import {
    faHeart as faHeartSolid,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../../components/StarRating';
import { Link } from 'react-router-dom';


export default class VideoPublic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.groupID = this.props.match.params.id.toLowerCase();
  }

  componentDidMount() {
    this.props.fetchGroupDetails(this.groupID);
    this.props.fetchMemberList(this.groupID, 0, true);
  }

  profileClicked = (user_id) => {
    this.props.history.push(user_id);
  }

  renderMembers = member => {
    const profileImg = (member.avatar_photo&&member.avatar_photo.image_url)?member.avatar_photo.image_url:"../../assets/images/profile.png";
    return (
    <BoxListing key={member.user_id}>
      <BoxListingCover onClick={() => this.profileClicked(member.user_id)}>
        <TopCoverBox bgImage={profileImg}>
          <StyledPlayButton />
        </TopCoverBox>
        <BottomCoverBox>
          <SecondaryHeading>{member.celebrity_profession[0].title}</SecondaryHeading>
          <StyledTitlePricingBox title={member.get_short_name} pricing={"$"+member.rate} />
        </BottomCoverBox>
      </BoxListingCover>
    </BoxListing>
    )
  }

  fetchList = (groupID, offset = 0, refresh = true) => {
    this.props.fetchMemberList(groupID, offset, refresh);
  }

  onLinkClick = webUrl => () => {
    let newWebUrl = webUrl;
    const urlTest = /^((https|http):\/\/)(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (!urlTest.test(webUrl)) {
      newWebUrl = `http://${webUrl}`;
    }
    window.open(newWebUrl, '_blank');
  }

  followCelebrityAction = () => {
    // if (props.isLoggedIn) {
    //   toggleFollowStatus(!followStatus);
    //   props.followCelebrity(props.userDetails.id, !followStatus);
    // } else {
    //   props.updateFavouritesQueue(props.userDetails.id, !followStatus);
    //   props.toggleLogin(true);
    // }
  };

  render() {
    const followStatus = true;
    const {
      membersList, membersLimit, membersCount, membersOffset, membersLoading, groupDetails
    } = this.props;
    let group_image = (groupDetails.avatar_photo&&groupDetails.avatar_photo.image_url)?groupDetails.avatar_photo.image_url:'assets/images/default-cover.jpg';
    let group_description = (groupDetails.group_details&&groupDetails.group_details.description)?groupDetails.group_details.description:'';
    let group_website = (groupDetails.group_details&&groupDetails.group_details.website)?groupDetails.group_details.website:'';
    return (
      <PageWrapper>
        <Header noCategory={true} heading={true} disableSearch/>
        
        <PageContainer>
            <div className="row">
                <div className="col-md-4">
                    <ProfilePicture src="https://s3.amazonaws.com/starsona-stb-usea1/images/profile/FILE_1554424819Y3SLZV4F.jpeg" alt="Profile" />
                    <FavoriteIconDiv onClick={this.followCelebrityAction}>
                        <FontAwesomeIcon icon={followStatus ? faHeartSolid : faHeart} />
                    </FavoriteIconDiv>
                    <IndustryDiv>Football</IndustryDiv>
                    <NameDiv>Paul George</NameDiv>
                    <VideoRatingDiv>Video rating</VideoRatingDiv>
                    <StarRating
                        readOnly
                        ratingClass="star-item"
                        rating={5}
                    />
                    <ProfileLink
                        href="#"
                    >
                        Read full profile
                    </ProfileLink>
                </div>
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>        
        </PageContainer>
        <Footer />
      </PageWrapper>
    );
  }
}
