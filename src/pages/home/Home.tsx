import { HomePageProps } from './home.props';
import useHomeHook, { } from './home.hook';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import homePageStyles from './Home.module.scss';
import classNames from 'classnames';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  const { topFive, generatePathname } = useHomeHook()


  return (
    <Container>
      <h1 className={classNames([homePageStyles.HomePage])}>Top 5 Github Users</h1>
      <span className={classNames([homePageStyles['HomePage__guideline']])}>Tap the username to see more information</span>
      <div className={classNames([homePageStyles['HomePage__users'],homePageStyles['HomePage__users-button']])}>
        {topFive.map((username: string) => <Button key={username}
          variant="contained"
          LinkComponent={Link}
          {...generatePathname(username)}>
          {username}
        </Button>)}
      </div>
    </Container>
  )
}

export default HomePage;