// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// // import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Grid, Paper, Typography } from "@mui/material";
// import { grey } from "@mui/material/colors";
// import styles from "./education.module.css";

// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import {
//   education,
//   dates,
//   course,
//   cgpa,
//   location,
//   additional,
// } from "./content";
import AnimatedTitle from "../animated/animsted-text";
// import { Avatar, Box } from "@mui/material";

// const EducationTimelineItem = ({
//   logo,
//   title,
//   location,
//   course,
//   dates,
//   cgpa,
//   additional,
//   isLast,
// }) => {
//   return (
//     <TimelineItem
//       sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
//     >
//       {/* Left Side: Logo and Line */}
//       <TimelineSeparator>
//         <Avatar
//           src={process.env.PUBLIC_URL + logo}
//           sx={{ width: 60, height: 60 }}
//         />
//         {!isLast && (
//           <TimelineConnector sx={{ backgroundColor: "gray", height: "50px" }} />
//         )}
//       </TimelineSeparator>

//       {/* Right Side: Content */}
//       <TimelineContent sx={{ ml: 2, textAlign: "left", flex: 1 }}>
//         <Paper elevation={0} sx={{ background: "inherit", padding: "10px" }}>
//           <Typography variant="h6" sx={{ fontWeight: 350 }}>
//             {title}
//           </Typography>
//           <Typography variant="caption">{location}</Typography>
//           <Typography variant="h6" sx={{ fontWeight: 300 }}>
//             {course}
//           </Typography>
//           <Typography variant="caption">{dates}</Typography>
//           <Typography variant="h6" sx={{ fontWeight: 300 }}>
//             CGPA: {cgpa}
//           </Typography>
//           <Typography>{additional}</Typography>
//         </Paper>
//       </TimelineContent>
//     </TimelineItem>
//   );
// };

// export default function Education() {
//   const icon = "";
//   const title = "title";
//   const date = "date";
//   const description = "description";
//   return (
//     <>
//       {/* <div id="education" className="m-4 sm:m-14">
//         {" "}
//         <CssBaseline />
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             className={styles.education}
//             sx={{ fontWeight: 300, letterSpacing: 4 }}
//           >
//             <AnimatedTitle text="EDUCATION" />
//           </Typography>
//           <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
//             <Grid container spacing={2}>
//               <Grid item lg={2} xs={12}>
//                 <Paper elevation={0} sx={{ background: "inherit" }}>
//                   <img
//                     src={process.env.PUBLIC_URL + "/assets/utdLogo.png"}
//                     alt="utd logo"
//                     className={styles.logo}
//                   />
//                 </Paper>
//               </Grid>
//               <Grid item lg={10} xs={12}>
//                 <Paper
//                   elevation={0}
//                   sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
//                 >
//                   <Typography
//                     variant="h6"
//                     className={styles.education}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     {education.UTD}
//                   </Typography>
//                   <Typography
//                     className={styles.location}
//                     variant="caption"
//                     display="block"
//                   >
//                     {location.UTD}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     className={styles.course}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     {course.UTD}
//                   </Typography>
//                   <Typography
//                     className={styles.dates}
//                     variant="caption"
//                     display="block"
//                   >
//                     {dates.UTD}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     className={styles.cgpa}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     CGPA: {cgpa.UTD}
//                   </Typography>
//                   <Typography
//                     className={styles.course}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     {additional.UTD}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Box>
//           <hr className={styles.hr} />
//         </Container>
//         <Container maxWidth="lg">
//           <Box sx={{ borderRadius: 1, borderBlockColor: grey }}>
//             <Grid container spacing={2}>
//               <Grid item lg={2} xs={12}>
//                 <Paper elevation={0} sx={{ background: "inherit" }}>
//                   <img
//                     src={process.env.PUBLIC_URL + "/assets/iithLogo.png"}
//                     alt="utd logo"
//                     className={styles.logo}
//                   />
//                 </Paper>
//               </Grid>
//               <Grid item lg={10} xs={12}>
//                 <Paper
//                   elevation={0}
//                   sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
//                 >
//                   <Typography
//                     variant="h6"
//                     className={styles.education}
//                     sx={{ fontWeight: 350 }}
//                   >
//                     {education.IITH}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     display="block"
//                     className={styles.location}
//                   >
//                     {location.IITH}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     className={styles.course}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     {course.IITH}
//                   </Typography>
//                   <Typography
//                     className={styles.dates}
//                     variant="caption"
//                     display="block"
//                   >
//                     {dates.IITH}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     className={styles.cgpa}
//                     sx={{ fontWeight: 300 }}
//                   >
//                     CGPA: {cgpa.IITH}
//                   </Typography>
//                   <Typography className={styles.course}>
//                     {additional.IITH}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Box>
//           <hr className={styles.hr} />
//         </Container>
//       </div> */}
//       {/* <Timeline>
//         <TimelineItem>
//           <TimelineSeparator>
//             <Avatar
//               src={process.env.PUBLIC_URL + "/assets/iithLogo.png"}
//               sx={{ width: 100, height: 100 }}
//             />
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent>
//             <Grid item lg={10} xs={12}>
//               <Paper
//                 elevation={0}
//                 sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
//               >
//                 <Typography
//                   variant="h6"
//                   className={styles.education}
//                   sx={{ fontWeight: 350 }}
//                 >
//                   {education.IITH}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   display="block"
//                   className={styles.location}
//                 >
//                   {location.IITH}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   className={styles.course}
//                   sx={{ fontWeight: 300 }}
//                 >
//                   {course.IITH}
//                 </Typography>
//                 <Typography
//                   className={styles.dates}
//                   variant="caption"
//                   display="block"
//                 >
//                   {dates.IITH}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   className={styles.cgpa}
//                   sx={{ fontWeight: 300 }}
//                 >
//                   CGPA: {cgpa.IITH}
//                 </Typography>
//                 <Typography className={styles.course}>
//                   {additional.IITH}
//                 </Typography>
//               </Paper>
//             </Grid>
//           </TimelineContent>
//         </TimelineItem>
//         <TimelineItem>
//           <TimelineSeparator>
//             <Avatar
//               src={process.env.PUBLIC_URL + "/assets/iithLogo.png"}
//               sx={{ width: 100, height: 100 }}
//             />
//             <TimelineConnector />
//           </TimelineSeparator>
//           <TimelineContent>
//             <Grid item lg={10} xs={12}>
//               <Paper
//                 elevation={0}
//                 sx={{ marginLeft: { sm: "3em" }, background: "inherit" }}
//               >
//                 <Typography
//                   variant="h6"
//                   className={styles.education}
//                   sx={{ fontWeight: 300 }}
//                 >
//                   {education.UTD}
//                 </Typography>
//                 <Typography
//                   className={styles.location}
//                   variant="caption"
//                   display="block"
//                 >
//                   {location.UTD}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   className={styles.course}
//                   sx={{ fontWeight: 300 }}
//                 >
//                   {course.UTD}
//                 </Typography>
//                 <Typography
//                   className={styles.dates}
//                   variant="caption"
//                   display="block"
//                 >
//                   {dates.UTD}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   className={styles.cgpa}
//                   sx={{ fontWeight: 300 }}
//                 >
//                   CGPA: {cgpa.UTD}
//                 </Typography>
//                 <Typography className={styles.course} sx={{ fontWeight: 300 }}>
//                   {additional.UTD}
//                 </Typography>
//               </Paper>
//             </Grid>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline> */}
//       <div id="education" className="m-4 sm:m-14">
//         {" "}
//         <CssBaseline />
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             className={styles.education}
//             sx={{ fontWeight: 300, letterSpacing: 4 }}
//           >
//             <AnimatedTitle text="EDUCATION" />
//           </Typography>
//           <Timeline
//             sx={{
//               display: "flex",
//               justifyContent: "flex-start",
//               alignItems: "flex-start",
//             }}
//           >
//             <EducationTimelineItem
//               logo="/assets/iithLogo.png"
//               title={education.IITH}
//               location={location.IITH}
//               course={course.IITH}
//               dates={dates.IITH}
//               cgpa={cgpa.IITH}
//               additional={additional.IITH}
//               isLast={false}
//             />
//             <EducationTimelineItem
//               logo="/assets/utdLogo.png"
//               title={education.UTD}
//               location={location.UTD}
//               course={course.UTD}
//               dates={dates.UTD}
//               cgpa={cgpa.UTD}
//               additional={additional.UTD}
//               isLast={true}
//             />
//           </Timeline>
//         </Container>
//       </div>
//     </>
//   );
// }

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography, Paper, Avatar, Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood"; // Example icon
import styles from "./education.module.css";
import {
  education,
  dates,
  course,
  cgpa,
  location,
  additional,
} from "./content";

const EducationTimelineItem = ({
  logo,
  title,
  location,
  course,
  dates,
  cgpa,
  additional,
  index,
}) => {
  return (
    <TimelineItem>
      {/* Time on the Left Side */}
      <TimelineOppositeContent style={{ flex: 0.1 }}>
        <Typography variant="body2" color="textSecondary">
          {dates}
        </Typography>
      </TimelineOppositeContent>

      {/* Middle Separator with Icon and Connector */}
      <TimelineSeparator>
        <TimelineDot>
          <Avatar
            src={process.env.PUBLIC_URL + logo}
            sx={{ width: 50, height: 50 }}
          />
        </TimelineDot>
        {index % 2 === 0 ? <TimelineConnector /> : null}
      </TimelineSeparator>

      {/* Right Side: Content */}
      <TimelineContent>
        <Paper
          elevation={1}
          sx={{ padding: "10px", background: "inherit", borderRadius: "16px" }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 350 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="caption">{location}</Typography>
          <Typography variant="subtitle1">{course}</Typography>
          <Typography variant="caption">{dates}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 300 }}>
            CGPA: {cgpa}
          </Typography>
          <Typography variant="body2">{additional}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function Education() {
  return (
    <>
      <div id="education" className="m-4 sm:m-14">
        {" "}
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className={styles.education}
            sx={{ fontWeight: 300, letterSpacing: 4, color: "#000064" }}
          >
            <AnimatedTitle text="EDUCATION" />
          </Typography>
          <CssBaseline />
          <Timeline align="alternate">
            {[
              {
                logo: "/assets/utdLogo2.png",
                title: education.UTD,
                location: location.UTD,
                course: course.UTD,
                dates: dates.UTD,
                cgpa: cgpa.UTD,
                additional: additional.UTD,
              },
              {
                logo: "/assets/iithLogo2.png",
                title: education.IITH,
                location: location.IITH,
                course: course.IITH,
                dates: dates.IITH,
                cgpa: cgpa.IITH,
                additional: additional.IITH,
              },
            ].map((item, index) => (
              <EducationTimelineItem key={index} {...item} index={index} />
            ))}
          </Timeline>
        </Container>
      </div>
    </>
  );
}
