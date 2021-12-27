import { Injectable, AfterContentInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import donationblock from '../data/donation/donation.json';
import category from '../data/donation/category.json';
import tags from '../data/donation/tags.json';
import author from '../data/authors.json';

@Injectable({
  providedIn: 'root'
})
export class DonationHelperService  implements AfterContentInit, OnInit {
  // pagination
  page: number = 1;
  public donationblock = donationblock;
  public donationcategory = category;
  public donationtags = tags;
  public category = category;
  public tags = tags;
  public donationdetails = donationblock;
  constructor(
    private route: ActivatedRoute
  ) {
  }
  // category
  public getCategories(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
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
    var elems = author.filter((item: { id: string; }) => {
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
    this.donationblock.slice(0, 4).map((item: { timestamp: number; postdate: string; }) => (
      item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.json object
      item.postdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth())}, ${today.getFullYear()}`
    ));
  }

  public recentProduct() {
    var elems = donationblock.filter((item: { timestamp: number | any; postdate: string | number | Date; }) => {
      return item.timestamp < new Date(item.postdate);
    });
    return elems;
  }
  public setCategoriesCount() {
    for (var i = 0; i < this.donationcategory.length; i++) {
      var count = this.donationblock.filter((post: { category: number[]; }) => { return post.category.includes(parseInt(this.donationcategory[i].id)) });
      count = count.length;
      this.donationcategory[i].count = count;
    }
  }
  // Post Details
  public setPost(id: any) {
    this.donationdetails = donationblock.filter((item: { id: any; }) => { return item.id == id });
  }
  // Category Filter
  public setCategory(id: number) {
    this.donationcategory = id;
  }
  public getCategory() {
    return this.donationcategory;
  }
  public getPostsByCategory(catId: string) {
    return this.donationblock = donationblock.filter((item: { category: number[]; }) => {
      return item.category.includes(parseInt(catId));
    });
  }
  // Tags Filter
  public setTag(id: number) {
    this.donationtags = id;
  }
  public getTag() {
    return this.donationtags;
  }
  public getPostsByTags(tagId: string) {
    return this.donationblock = donationblock.filter((item: { tags: number[]; }) => {
      return item.tags.includes(parseInt(tagId));
    });
  }
  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.donationblock = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.donationblock = postsByTags;
    }
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setCategoriesCount();
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
