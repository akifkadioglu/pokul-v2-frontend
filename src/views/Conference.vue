<template>
  <div></div>
</template>

<script>
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
export default {
  beforeCreate() {
    this.$emit("headerOf", false);
  },
  beforeDestroy() {
    this.$emit("headerOf", true);
  },
  data() {
    return {
      name: "Flavio",
    };
  },
  mounted: async function () {
    const apiKey = process.env.VUE_APP_VIDEOSDK_API_KEY;
    const meetingId = "milkyway";
    const name = "Akif Kadioglu";
    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,
      containerId: null,
      redirectOnLeave: "https://www.p-okul.net/",
      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,
      recordingEnabled: true,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: "https://www.p-okul.net/",
      recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
      brandingEnabled: true,
      brandLogoURL: "https://www.p-okul.net/logo.png",
      brandName: "P-Okul",
      participantCanLeave: true, // if false, leave button won't be visible
      // Live stream meeting to youtube
      livestream: {
        autoStart: true,
        outputs: [],
      },
      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        removeParticipant: true, // Remove other participant from meeting
        endMeeting: true, // End meeting for all participant
        drawOnWhiteboard: true, // Can Draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle recording
      },
      joinScreen: {
        visible: true, // Show the join screen ?
        title: "asd", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },
      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },
      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "https://www.p-okul.net/", // action button href
        },
      },
    };
    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  },
};
</script>
