import { Grid } from '@mui/material';
import { memberProfiles } from "@/constants/strings";
import ProfileCard from "@/components/ProfileCard";
import { styles } from './styles' 



const AboutUs = () => {
   <main >
        <Grid
        container
        gap={4}
        sx={styles.main}>
          { memberProfiles.map((member: any) => (
            <Grid
            item
            key={member.name}
            xs={11}
            sm={6}
            md={4}
            >
              <ProfileCard member={member}/>
            </Grid>
          )
          )}
        </Grid>
      </main>
}