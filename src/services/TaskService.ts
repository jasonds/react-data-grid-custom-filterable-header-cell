import * as POC from '../core';
import * as randomstring from 'randomstring';

export abstract class TaskService {
  public static async getTasks(): Promise<POC.Models.Task[]> {
    function getRandomTaskCount(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return Array.from(Array(getRandomTaskCount(100, 1000)), (x, i) => {
      return {
        id: i.toString(),
        order: i + 1,
        title: randomstring.generate({
          charset: 'alphanumeric'
        }),
        description: randomstring.generate({
          length: 64,
          charset: 'alphanumeric'
        })
      };
    });
  }
}
