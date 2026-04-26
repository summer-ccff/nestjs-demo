import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page: number, pageSize: number, keyword: string) {
    const where = keyword
      ? {
          name: {
            contains: keyword,
          },
        }
      : {};

    const [list, total] = await Promise.all([
      this.prisma.user.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        where,
        orderBy: {
          updatedAt: 'desc',
        },
      }),
      this.prisma.user.count({
        where,
      }),
    ]);

    return {
      list,
      total,
      page,
      pageSize,
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`用户 ID ${id} 不存在`);
    }

    return user;
  }

  create(name: string) {
    return this.prisma.user.create({
      data: { name },
    });
  }

  async update(id: number, name: string) {
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
