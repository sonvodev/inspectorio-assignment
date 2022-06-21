import ArrowBack from '@mui/icons-material/ArrowBack';
import { Avatar, Button, Card } from '@mui/material';
import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import usePersonHook from './person.hook';
import { PersonPageProps } from './person.props';
const PersonPage: React.FC<PersonPageProps> = (props: PersonPageProps) => {

  const { username } = useParams();
  const { personState: { payload: person }, buttonProps } = usePersonHook(username!)

  return (
    <Suspense fallback={<div>Personal details is loading...</div>}>
      <Button LinkComponent={Link}
        {...buttonProps}
      >
        <ArrowBack />
        Back
      </Button>
      <Card>
        <Avatar alt={person?.name!} src={person?.avatarUrl!} />
        <span>{person?.name}</span>
        <span>{person?.location}</span>
      </Card>
    </Suspense>
  )
}

export default PersonPage;