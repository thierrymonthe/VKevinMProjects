import { Injectable, AfterContentInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import storyblock from '../data/story/story.json';
import authors from '../data/authors.json';
import tags from '../data/story/tags.json';

@Injectable({
  providedIn: 'root'
})
export class StoryHelperService implements AfterContentInit, OnInit {
  // pagination
  page: number = 1;
  public storyblock = storyblock;
  public storytags = tags;
  public tags = tags;
  public storydetails = storyblock;
  constructor(
    private route: ActivatedRoute
  ) {
  }
  // Tags
  public getTags(items: string | any[]) {
    var elems = tags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
   // Author
   public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Recent Product
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }

  public setDemoDate() {
    var today = new Date();
    this.storyblock.slice(0, 4).map((item: { timestamp: number; postdate: string; }) => (
      item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.json object
      item.postdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth())}, ${today.getFullYear()}`
    ));
  }

  public recentPost() { 
    var elems = storyblock.filter((item: { timestamp: number | any; postdate: string | number | Date; }) => {
      return item.timestamp < new Date(item.postdate);
    });
    return elems;
  }
  // Post Details
  public setPost(id: any) {
    this.storydetails = storyblock.filter((item: { id: any; }) => { return item.id == id });
  }
  // Tags Filter
  public setTag(id: number) {
    this.storytags = id;
  }
  public getTag() {
    return this.storytags;
  }
  public getPostsByTags(tagId: string) {
    return this.storyblock = storyblock.filter((item: { tags: number[]; }) => {
      return item.tags.includes(parseInt(tagId));
    });
  }
  // Fetch All filter
  public setPosts() {
    var postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';
     if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.storyblock = postsByTags;
    }
  }
  ngAfterContentInit(): void {
    this.setTag(this.route.snapshot.params.tagId);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setDemoDate();
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconstyle: "fb",
        iconClass: "fab fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconstyle: "tw",
        iconClass: "fab fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconstyle: "ln",
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconstyle: "gg",
        iconClass: "fab fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
