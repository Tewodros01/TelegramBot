import { Job } from "../models/job";

export class JobService {
  private static jobList: Job[] = [
    {
      title: "Software Engineer",
      company: "Tech Co",
      description:
        "Exciting software engineering position with a focus on web development",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      imageUrl: "https://picsum.photos/200/300",
    },
    // Add more job listings with imageUrl if needed
  ];

  static getJobListings(): Job[] {
    return JobService.jobList;
  }
}
