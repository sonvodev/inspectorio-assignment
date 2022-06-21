import { PersonResponseInterface } from "./person-response.interface";

export class PersonResponseModel {
  login: string;
  id: number;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  publicRepos: string;
  publicGists: string;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string;

  /**
   *
   */
  constructor(partial: Partial<PersonResponseInterface> = {}) {
    this.login = partial.login!;
    this.id = partial.id!;
    this.avatarUrl = partial.avatar_url!;
    this.gravatarId = partial.gravatar_id!;
    this.url = partial.url!;
    this.htmlUrl = partial.html_url!;
    this.followersUrl = partial.followers_url!;
    this.followingUrl = partial.following_url!;
    this.gistsUrl = partial.gists_url!;
    this.starredUrl = partial.starred_url!;
    this.subscriptionsUrl = partial.subscriptions_url!;
    this.organizationsUrl = partial.organizations_url!;
    this.reposUrl = partial.repos_url!;
    this.eventsUrl = partial.events_url!;
    this.receivedEventsUrl = partial.received_events_url!;
    this.type = partial.type!;
    this.siteAdmin = partial.site_admin!;
    this.name = partial.name!;
    this.company = partial.company!;
    this.blog = partial.blog!;
    this.location = partial.location!;
    this.email = partial.email!;
    this.hireable = partial.hireable!;
    this.bio = partial.bio!;
    this.publicRepos = partial.public_repos!;
    this.publicGists = partial.public_gists!;
    this.followers = partial.followers!;
    this.following = partial.following!;
    this.createdAt = partial.created_at!;
    this.updatedAt = partial.updated_at!;
  }
}
