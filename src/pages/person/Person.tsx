import ArrowBack from '@mui/icons-material/ArrowBack';
import { Avatar, Button, Card, Stack, Container, CardHeader, CardContent } from '@mui/material';
import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import usePersonHook from './person.hook';
import { PersonPageProps } from './person.props';
import { PersonalDetails } from "./components";
const PersonPage: React.FC<PersonPageProps> = (props: PersonPageProps) => {

  const { username } = useParams();
  const { personState: { payload: person }, buttonProps, isLoading } = usePersonHook(username!)

  return (
    <Suspense fallback={<div>Personal details is loading...</div>}>
      <Container maxWidth="md">
        <Stack justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}>
          <Button LinkComponent={Link}
            {...buttonProps}
          >
            <ArrowBack />
            Back
          </Button>
          <Card >
            <PersonalDetails isLoading={isLoading}
              location={person?.location!}
              name={person?.name!}
              avatarUrl={person?.avatarUrl!}
            />
          </Card>
        </Stack>
      </Container>
    </Suspense>

  )
}

export default PersonPage;