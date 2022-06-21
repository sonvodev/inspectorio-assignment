import { Avatar, CardHeader } from '@mui/material';
import { } from './personal-details.hook';
import { PersonalDetailsProps } from './personal-details.props';

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ avatarUrl, isLoading, location, name }: PersonalDetailsProps) => {

  return isLoading ? (
    <CardHeader
      avatar={
        <Avatar alt="Loading..." >L</Avatar>
      }
      title="Loading..."
      subheader="Loading..."
    />
  ) : (
    <CardHeader
      avatar={
        <Avatar alt={name!} src={avatarUrl!} />
      }
      title={name}
      subheader={location || "Unknown"}
    />

  )
}

export default PersonalDetails;