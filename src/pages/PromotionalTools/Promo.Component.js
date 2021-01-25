import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import SubHeader from 'components/SubHeader';
import { Card } from 'styles/CommonStyled';
import PromoTemplate from 'components/PromoTemplates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Layout, TemplateList, Accordion } from './styled';
import { getStarName } from '../../utils/dataToStringFormatter';

const templates = [
  {
    profilePic: '../../assets/images/default-cover.jpg',
    bagImg: '.../../assets/images/profilebackground.svg',
    name: 'NAME NAME',
    template:
      '<span class="img-back" style="background-image:url(@@bag-img@@); width: 265px; height: 265px; background-size: contain; display: inline-block; background-repeat: no-repeat; border-radius: 15px; box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.16);"></span><span class="prof-img" style="background-image:url(@@prof-pic@@);width: 118px;height: 118px;background-size: contain;display: inline-block;background-repeat: no-repeat; position: absolute;left: 74px; top: 65px;"></span><span class="user-name" style="position: absolute;left: 0;text-align: center;display: inline-block;width: 100%;bottom: 80px;font-size: 18px;color: #ff6c58;font-family: Gilroy;">@@user-name@@</span>',
  },
  {
    profilePic: '../../assets/images/default-cover.jpg',
    bagImg: '.../../assets/images/bluebackground.svg',
    name: 'NAME NAME',
    template:
      '<span class="img-back" style="background-image:url(@@bag-img@@); width: 265px; height: 265px; background-size: contain; display: inline-block; background-repeat: no-repeat; box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.16);"></span><span class="prof-img" style="background-image:url(@@prof-pic@@);width: 118px;height: 118px;background-size: contain;display: inline-block;background-repeat: no-repeat; position: absolute;left: 74px; top: 43px; border-radius: 50%;"></span>',
  },
  {
    profilePic: '../../assets/images/default-cover.jpg',
    bagImg: '.../../assets/images/crowdbackground.svg',
    name: 'NAME NAME',
    template:
      '<span class="img-back" style="background-image:url(@@bag-img@@); width: 265px; height: 265px; background-size: contain; display: inline-block; background-repeat: no-repeat; box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.16);"></span><span class="prof-img" style="background-image:url(@@prof-pic@@);width: 102px;height: 102px;background-size: contain;display: inline-block;background-repeat: no-repeat; position: absolute;left: 76px; top: 120px; border-radius: 50%;"></span> <span class="user-name" style=" position: absolute;left: 0;text-align: center;display: inline-block;width: 100%;top: 70px;font-size: 21px;color: #555;font-family: Gilroy-Semibold; text-transform: uppercase;">@@user-name@@</span><span style="position: absolute;left: 0;text-align: center;display: inline-block;width: 100%;top: 98px;font-size: 15px;color: #555;font-family: Gilroy-Semibold;">IS ON STARSONA!</span>',
  },
];

const PromoTools = props => {
  const goBack = () => {
    props.history.push('/manage');
  };
  const getSocial = () => {
    return (
      <React.Fragment>
        <span className="share-text">Where do you want to share this?</span>
        <section className="social-wrap">
          <FontAwesomeIcon icon={faFacebookF} onClick={() => {shareImage()}} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </section>
      </React.Fragment>
    );
  };
  const shareImage = () => {
    return;
  }
  const getNote = () => {
    return (
      <React.Fragment>
        <h2 className="promo-head">How do I increase my bookings?</h2>
        <p className="promo-note">
          Simply select your graphic, and then choose which social media
          platform to share it on!
        </p>
      </React.Fragment>
    );
  };

  const getTemplate = profile => {
    let temp = profile.template;
    temp = temp.replace('@@bag-img@@', profile.bagImg);
    temp = temp.replace('@@prof-pic@@', props.userDetails.avatarPhoto);
    temp = temp.replace('@@user-name@@', 
          props.userDetails &&
          getStarName(
            props.userDetails.nick_name,
            props.userDetails.first_name,
            props.userDetails.last_name,
          ));
    return temp;
  };

  return (
    <Layout>
      <SubHeader heading="Promote Myself" onClick={goBack} />
      <Card className="card-layout">
        {getNote()}
        <TemplateList>
          {templates.map((item, index) => {
            return (
              <li className="template-wrap" key={index}>
                <PromoTemplate template={getTemplate(item)} />
                {getSocial()}
              </li>
            );
          })}
        </TemplateList>
      </Card>
      <Accordion>
        <Card className="card-mob">{getNote()}</Card>
        <Card className="card-mob">
          {templates.map((item, index) => {
            return (
              <ExpansionPanel
                defaultExpanded
                classes={{ root: 'collapse-root', expanded: 'collapse-exp' }}
                key={index}
              >
                <ExpansionPanelSummary
                  classes={{
                    root: 'collapse-head',
                    expandIcon: 'fontawesome-icons',
                  }}
                  expandIcon={
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="collapse-arrow"
                    />
                  }
                >
                  Option {index + 1}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: 'collapse-details' }}>
                  <section className="template-wrap">
                    <PromoTemplate template={getTemplate(item)} />
                    {getSocial()}
                  </section>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </Card>
      </Accordion>
    </Layout>
  );
};

PromoTools.propTypes = {
  history: PropTypes.object.isRequired,
};
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutUser()),
});

const mapStateToProps = state => ({
  userDetails: state.userDetails.settings_userDetails,
  celebDetails: state.userDetails.settings_celebrityDetails,
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PromoTools),
);
