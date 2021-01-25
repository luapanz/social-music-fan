class Api {
  static getConfig = 'v1/config/';
  static getFeaturedStars = 'v2/user/celebrity_display/';
  static getCelebList = 'v2/user/fan/celebrity_list/get_list/';
  static getTrendingStars = 'v2/user/trending_stars/';
  static authGetCelebList = 'v2/user/fan/celebrity_list/';
  static getProfessionsList = 'v2/user/filtered_professions/';
  static getAllProfessions = 'v1/user/professions/';
  static getGroupTypes = 'v1/user/group_types/';
  static getVideosList = 'v2/request/featured_videos/';
  static login = 'v1/user/login/';
  static register = 'v2/user/register/';
  static getSuggestionList = 'v1/user/fan/suggestion_list/';
  static socialMediaLogin = 'v1/user/socialsignup/';
  static authGetCelebDetails = 'v2/user/user_details/';
  static getCelebDetails = id => `v2/user/user_details/${id}/get_details/`;
  static getUserFavourites = 'v1/user/fan/favourite_stars/';
  static getUserVideos = 'v2/request/request_list/';
  static getRequestDetails = 'v2/request/stargramz/';
  static followCelebrity = 'v1/user/fan/celebrity_follow/';
  static getOccasionList = 'v2/request/occasion_list/';
  static downloadVideo = videoId => `${env('SERVER_URL')}download/${videoId}`;
  static setVideoView = 'v1/request/readvideo/';
  static setTags = 'v2/user/tags/'
  static otherRelation = 'v1/request/other_relation/';
  static getEphemeralKey = 'v1/payments/generatekey/';
  static tipPayment = 'v2/payments/paytip/';
  static createCharge = 'v1/payments/createcharge/';
  static starsonaRequest = 'v1/request/stargramz/';
  static starsonaVideo = 'v1/request/stargramz_video/';
  static getSourceList = 'v1/payments/stripe_cards/';
  static modifySourceList = 'v1/payments/attach_detach_source/';
  static forgotPassword = 'v1/user/forgotpassword/';
  static resetPassword = 'v1/user/resetpassword/';
  static getAWSVideo = 'v1/user/get_signed_url/?key=';
  static modifyUserDetails = 'v2/user/user_details';
  static modifySocialLinks = 'v1/user/social_links/';
  static updateGroupAccount = 'v1/user/group_account/';
  static updateNotification = 'v1/user/notification_settings/';
  static updatePhoto = 'v2/user/profileimages/';
  static celebrityProfile = 'v2/user/celebrity_profile/';
  static getImageCredentials = imageType =>
    `v1/user/signed_url/?extension=${imageType}&key=profile_images&file_type=image`;
  static getawsCredentials = (key, extension, fileType) =>
    `v1/user/signed_url/?extension=${extension}&key=${key}&file_type=${fileType}`;
  static changeRequestStatus = 'v1/request/change_request_status/';
  static rating = 'v1/user/fan/celebrity_rating/';
  static requestFeedback = 'v2/request/feedback/';
  static contactSupport = 'v2/user/contact_support/';
  static reportAbuse = 'v1/user/fan/celebrity_abuse/';
  static reactionAbuse = 'v1/request/reaction_abuse/';
  static stripeRegistration = 'v1/payments/getstripeurl/';
  static checkStripe = 'v1/payments/stripe_dashboard/';
  static changePassword = 'v2/user/changepassword/';
  static getEarningsList = 'v1/payments/earnings_list/';
  static requestReferral = 'v1/user/referral_request/';
  static getReferralList = 'v1/user/referral_list/';
  static getCommentsList = 'v1/request/comments';
  static addComment = 'v1/request/comments/';
  static groupMembersList = 'v1/user/group_list/';
  static celebrityGroupFollow = 'v1/user/join_group/';
  static fanGroupFollow = 'v1/user/fan/group_follow/';
  static getGroupMembers = 'v1/user/get_members/';
  static getOtpCode = 'v1/user/validate_mobile/';
  static validateOtpCode = 'v1/user/verify_mobile/';
  static celebRepresentative = 'v1/user/celebrity_representative/';
  static getReactions = 'v1/request/reactions/';
  static getStarReaction = 'v2/request/reactions_full_listing/';
  static getGroupsList = 'v1/user/group_account/';
  static groupTypeListing = 'v1/user/active_group_types/';
  static createGroupNotification = 'v1/notification/new_group_notification/';
  static twitterLogin = 'v1/user/twitter_integration/';
  static twitterOauth = 'v1/user/twitter_login';
  static validatePromo = 'v1/user/referral_validate/';
  static getSubCategoryList = 'v2/user/professions/?parent=false';
  static getGroupDetails = groupID =>
    `v1/user/user_details/${groupID}/get_details`;
  static getGroupMemberList = groupID =>
    `v1/user/group_list/?account=${groupID}`;
  static dashboardUpdate = 'v2/user/dashboard_update/';
  static dashBoard = 'v2/user/celebrity_dashboard/';
  static notificationViewed = 'v2/user/settings_viewed/';
  static updateUnseenCount = 'v1/user/update_unseen_count';
  static getRecentActivity = 'v2/user/recent_activity/';
  static favoriteVideo = 'v2/request/request_favorites/';
  static toggleActivityVisibility = 'v2/user/activity_public_visibility/';
  static hideVideoFromProfile = 'v2/request/video_hide_from_public/';
  static videoPublicity = 'v2/request/make_booking_private/';
  static reactionComplete = 'v2/request/reaction_process/';
}

export default Api;