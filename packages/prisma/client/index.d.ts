
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>
/**
 * Model tags_tasks
 * 
 */
export type tags_tasks = $Result.DefaultSelection<Prisma.$tags_tasksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Color: {
  RED: 'RED',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  ORANGE: 'ORANGE',
  PURPLE: 'PURPLE',
  PINK: 'PINK',
  BROWN: 'BROWN',
  GRAY: 'GRAY',
  BLACK: 'BLACK'
};

export type Color = (typeof Color)[keyof typeof Color]

}

export type Color = $Enums.Color

export const Color: typeof $Enums.Color

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs>;

  /**
   * `prisma.tags_tasks`: Exposes CRUD operations for the **tags_tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags_tasks
    * const tags_tasks = await prisma.tags_tasks.findMany()
    * ```
    */
  get tags_tasks(): Prisma.tags_tasksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    task: 'task',
    tag: 'tag',
    tags_tasks: 'tags_tasks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'task' | 'tag' | 'tags_tasks'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>,
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      tags_tasks: {
        payload: Prisma.$tags_tasksPayload<ExtArgs>
        fields: Prisma.tags_tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tags_tasksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tags_tasksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          findFirst: {
            args: Prisma.tags_tasksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tags_tasksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          findMany: {
            args: Prisma.tags_tasksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>[]
          }
          create: {
            args: Prisma.tags_tasksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          createMany: {
            args: Prisma.tags_tasksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tags_tasksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          update: {
            args: Prisma.tags_tasksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          deleteMany: {
            args: Prisma.tags_tasksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tags_tasksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tags_tasksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tags_tasksPayload>
          }
          aggregate: {
            args: Prisma.Tags_tasksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags_tasks>
          }
          groupBy: {
            args: Prisma.tags_tasksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tags_tasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tags_tasksCountArgs<ExtArgs>,
            result: $Utils.Optional<Tags_tasksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    tags_tasks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags_tasks?: boolean | TaskCountOutputTypeCountTags_tasksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTags_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tags_tasksWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tags_tasks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags_tasks?: boolean | TagCountOutputTypeCountTags_tasksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTags_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tags_tasksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    duration: number | null
  }

  export type TaskSumAggregateOutputType = {
    duration: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dateTime: Date | null
    duration: number | null
    finished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dateTime: Date | null
    duration: number | null
    finished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dateTime: number
    duration: number
    finished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    duration?: true
  }

  export type TaskSumAggregateInputType = {
    duration?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dateTime?: true
    duration?: true
    finished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dateTime?: true
    duration?: true
    finished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dateTime?: true
    duration?: true
    finished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    dateTime: Date
    duration: number
    finished: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dateTime?: boolean
    duration?: boolean
    finished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags_tasks?: boolean | task$tags_tasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dateTime?: boolean
    duration?: boolean
    finished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags_tasks?: boolean | task$tags_tasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      tags_tasks: Prisma.$tags_tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      dateTime: Date
      duration: number
      finished: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, taskCreateArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, taskDeleteArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpsertArgs<ExtArgs>>
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tags_tasks<T extends task$tags_tasksArgs<ExtArgs> = {}>(args?: Subset<T, task$tags_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the task model
   */ 
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'String'>
    readonly title: FieldRef<"task", 'String'>
    readonly description: FieldRef<"task", 'String'>
    readonly dateTime: FieldRef<"task", 'DateTime'>
    readonly duration: FieldRef<"task", 'Int'>
    readonly finished: FieldRef<"task", 'Boolean'>
    readonly createdAt: FieldRef<"task", 'DateTime'>
    readonly updatedAt: FieldRef<"task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
  }

  /**
   * task.tags_tasks
   */
  export type task$tags_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    where?: tags_tasksWhereInput
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    cursor?: tags_tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tags_tasksScalarFieldEnum | Tags_tasksScalarFieldEnum[]
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: $Enums.Color | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: $Enums.Color | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: $Enums.Color
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    tags_tasks?: boolean | tag$tags_tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type tagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
  }


  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags_tasks?: boolean | tag$tags_tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      tags_tasks: Prisma.$tags_tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: $Enums.Color
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }


  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends tagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tagCreateArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {tagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends tagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tagDeleteArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tagUpdateArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends tagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tagUpsertArgs<ExtArgs>>
    ): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tags_tasks<T extends tag$tags_tasksArgs<ExtArgs> = {}>(args?: Subset<T, tag$tags_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tag model
   */ 
  interface tagFieldRefs {
    readonly id: FieldRef<"tag", 'String'>
    readonly name: FieldRef<"tag", 'String'>
    readonly color: FieldRef<"tag", 'Color'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
  }

  /**
   * tag.tags_tasks
   */
  export type tag$tags_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    where?: tags_tasksWhereInput
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    cursor?: tags_tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tags_tasksScalarFieldEnum | Tags_tasksScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Model tags_tasks
   */

  export type AggregateTags_tasks = {
    _count: Tags_tasksCountAggregateOutputType | null
    _min: Tags_tasksMinAggregateOutputType | null
    _max: Tags_tasksMaxAggregateOutputType | null
  }

  export type Tags_tasksMinAggregateOutputType = {
    tagId: string | null
    taskId: string | null
  }

  export type Tags_tasksMaxAggregateOutputType = {
    tagId: string | null
    taskId: string | null
  }

  export type Tags_tasksCountAggregateOutputType = {
    tagId: number
    taskId: number
    _all: number
  }


  export type Tags_tasksMinAggregateInputType = {
    tagId?: true
    taskId?: true
  }

  export type Tags_tasksMaxAggregateInputType = {
    tagId?: true
    taskId?: true
  }

  export type Tags_tasksCountAggregateInputType = {
    tagId?: true
    taskId?: true
    _all?: true
  }

  export type Tags_tasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags_tasks to aggregate.
     */
    where?: tags_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags_tasks to fetch.
     */
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tags_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags_tasks
    **/
    _count?: true | Tags_tasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tags_tasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tags_tasksMaxAggregateInputType
  }

  export type GetTags_tasksAggregateType<T extends Tags_tasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTags_tasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags_tasks[P]>
      : GetScalarType<T[P], AggregateTags_tasks[P]>
  }




  export type tags_tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tags_tasksWhereInput
    orderBy?: tags_tasksOrderByWithAggregationInput | tags_tasksOrderByWithAggregationInput[]
    by: Tags_tasksScalarFieldEnum[] | Tags_tasksScalarFieldEnum
    having?: tags_tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tags_tasksCountAggregateInputType | true
    _min?: Tags_tasksMinAggregateInputType
    _max?: Tags_tasksMaxAggregateInputType
  }

  export type Tags_tasksGroupByOutputType = {
    tagId: string
    taskId: string
    _count: Tags_tasksCountAggregateOutputType | null
    _min: Tags_tasksMinAggregateOutputType | null
    _max: Tags_tasksMaxAggregateOutputType | null
  }

  type GetTags_tasksGroupByPayload<T extends tags_tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tags_tasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tags_tasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tags_tasksGroupByOutputType[P]>
            : GetScalarType<T[P], Tags_tasksGroupByOutputType[P]>
        }
      >
    >


  export type tags_tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagId?: boolean
    taskId?: boolean
    task?: boolean | taskDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags_tasks"]>

  export type tags_tasksSelectScalar = {
    tagId?: boolean
    taskId?: boolean
  }


  export type tags_tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | taskDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }


  export type $tags_tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags_tasks"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>
      tag: Prisma.$tagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tagId: string
      taskId: string
    }, ExtArgs["result"]["tags_tasks"]>
    composites: {}
  }


  type tags_tasksGetPayload<S extends boolean | null | undefined | tags_tasksDefaultArgs> = $Result.GetResult<Prisma.$tags_tasksPayload, S>

  type tags_tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tags_tasksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tags_tasksCountAggregateInputType | true
    }

  export interface tags_tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags_tasks'], meta: { name: 'tags_tasks' } }
    /**
     * Find zero or one Tags_tasks that matches the filter.
     * @param {tags_tasksFindUniqueArgs} args - Arguments to find a Tags_tasks
     * @example
     * // Get one Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tags_tasksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksFindUniqueArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags_tasks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tags_tasksFindUniqueOrThrowArgs} args - Arguments to find a Tags_tasks
     * @example
     * // Get one Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tags_tasksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksFindFirstArgs} args - Arguments to find a Tags_tasks
     * @example
     * // Get one Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tags_tasksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksFindFirstArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags_tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksFindFirstOrThrowArgs} args - Arguments to find a Tags_tasks
     * @example
     * // Get one Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tags_tasksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findMany()
     * 
     * // Get first 10 Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const tags_tasksWithTagIdOnly = await prisma.tags_tasks.findMany({ select: { tagId: true } })
     * 
    **/
    findMany<T extends tags_tasksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags_tasks.
     * @param {tags_tasksCreateArgs} args - Arguments to create a Tags_tasks.
     * @example
     * // Create one Tags_tasks
     * const Tags_tasks = await prisma.tags_tasks.create({
     *   data: {
     *     // ... data to create a Tags_tasks
     *   }
     * })
     * 
    **/
    create<T extends tags_tasksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksCreateArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags_tasks.
     *     @param {tags_tasksCreateManyArgs} args - Arguments to create many Tags_tasks.
     *     @example
     *     // Create many Tags_tasks
     *     const tags_tasks = await prisma.tags_tasks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tags_tasksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags_tasks.
     * @param {tags_tasksDeleteArgs} args - Arguments to delete one Tags_tasks.
     * @example
     * // Delete one Tags_tasks
     * const Tags_tasks = await prisma.tags_tasks.delete({
     *   where: {
     *     // ... filter to delete one Tags_tasks
     *   }
     * })
     * 
    **/
    delete<T extends tags_tasksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksDeleteArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags_tasks.
     * @param {tags_tasksUpdateArgs} args - Arguments to update one Tags_tasks.
     * @example
     * // Update one Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tags_tasksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksUpdateArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags_tasks.
     * @param {tags_tasksDeleteManyArgs} args - Arguments to filter Tags_tasks to delete.
     * @example
     * // Delete a few Tags_tasks
     * const { count } = await prisma.tags_tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tags_tasksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tags_tasksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tags_tasksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags_tasks.
     * @param {tags_tasksUpsertArgs} args - Arguments to update or create a Tags_tasks.
     * @example
     * // Update or create a Tags_tasks
     * const tags_tasks = await prisma.tags_tasks.upsert({
     *   create: {
     *     // ... data to create a Tags_tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags_tasks we want to update
     *   }
     * })
    **/
    upsert<T extends tags_tasksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tags_tasksUpsertArgs<ExtArgs>>
    ): Prisma__tags_tasksClient<$Result.GetResult<Prisma.$tags_tasksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksCountArgs} args - Arguments to filter Tags_tasks to count.
     * @example
     * // Count the number of Tags_tasks
     * const count = await prisma.tags_tasks.count({
     *   where: {
     *     // ... the filter for the Tags_tasks we want to count
     *   }
     * })
    **/
    count<T extends tags_tasksCountArgs>(
      args?: Subset<T, tags_tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tags_tasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tags_tasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tags_tasksAggregateArgs>(args: Subset<T, Tags_tasksAggregateArgs>): Prisma.PrismaPromise<GetTags_tasksAggregateType<T>>

    /**
     * Group by Tags_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tags_tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tags_tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tags_tasksGroupByArgs['orderBy'] }
        : { orderBy?: tags_tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tags_tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTags_tasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags_tasks model
   */
  readonly fields: tags_tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags_tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tags_tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    task<T extends taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taskDefaultArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tags_tasks model
   */ 
  interface tags_tasksFieldRefs {
    readonly tagId: FieldRef<"tags_tasks", 'String'>
    readonly taskId: FieldRef<"tags_tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags_tasks findUnique
   */
  export type tags_tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter, which tags_tasks to fetch.
     */
    where: tags_tasksWhereUniqueInput
  }

  /**
   * tags_tasks findUniqueOrThrow
   */
  export type tags_tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter, which tags_tasks to fetch.
     */
    where: tags_tasksWhereUniqueInput
  }

  /**
   * tags_tasks findFirst
   */
  export type tags_tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter, which tags_tasks to fetch.
     */
    where?: tags_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags_tasks to fetch.
     */
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags_tasks.
     */
    cursor?: tags_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags_tasks.
     */
    distinct?: Tags_tasksScalarFieldEnum | Tags_tasksScalarFieldEnum[]
  }

  /**
   * tags_tasks findFirstOrThrow
   */
  export type tags_tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter, which tags_tasks to fetch.
     */
    where?: tags_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags_tasks to fetch.
     */
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags_tasks.
     */
    cursor?: tags_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags_tasks.
     */
    distinct?: Tags_tasksScalarFieldEnum | Tags_tasksScalarFieldEnum[]
  }

  /**
   * tags_tasks findMany
   */
  export type tags_tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter, which tags_tasks to fetch.
     */
    where?: tags_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags_tasks to fetch.
     */
    orderBy?: tags_tasksOrderByWithRelationInput | tags_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags_tasks.
     */
    cursor?: tags_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags_tasks.
     */
    skip?: number
    distinct?: Tags_tasksScalarFieldEnum | Tags_tasksScalarFieldEnum[]
  }

  /**
   * tags_tasks create
   */
  export type tags_tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tags_tasks.
     */
    data: XOR<tags_tasksCreateInput, tags_tasksUncheckedCreateInput>
  }

  /**
   * tags_tasks createMany
   */
  export type tags_tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags_tasks.
     */
    data: tags_tasksCreateManyInput | tags_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags_tasks update
   */
  export type tags_tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tags_tasks.
     */
    data: XOR<tags_tasksUpdateInput, tags_tasksUncheckedUpdateInput>
    /**
     * Choose, which tags_tasks to update.
     */
    where: tags_tasksWhereUniqueInput
  }

  /**
   * tags_tasks updateMany
   */
  export type tags_tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags_tasks.
     */
    data: XOR<tags_tasksUpdateManyMutationInput, tags_tasksUncheckedUpdateManyInput>
    /**
     * Filter which tags_tasks to update
     */
    where?: tags_tasksWhereInput
  }

  /**
   * tags_tasks upsert
   */
  export type tags_tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tags_tasks to update in case it exists.
     */
    where: tags_tasksWhereUniqueInput
    /**
     * In case the tags_tasks found by the `where` argument doesn't exist, create a new tags_tasks with this data.
     */
    create: XOR<tags_tasksCreateInput, tags_tasksUncheckedCreateInput>
    /**
     * In case the tags_tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tags_tasksUpdateInput, tags_tasksUncheckedUpdateInput>
  }

  /**
   * tags_tasks delete
   */
  export type tags_tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
    /**
     * Filter which tags_tasks to delete.
     */
    where: tags_tasksWhereUniqueInput
  }

  /**
   * tags_tasks deleteMany
   */
  export type tags_tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags_tasks to delete
     */
    where?: tags_tasksWhereInput
  }

  /**
   * tags_tasks without action
   */
  export type tags_tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags_tasks
     */
    select?: tags_tasksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tags_tasksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dateTime: 'dateTime',
    duration: 'duration',
    finished: 'finished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const Tags_tasksScalarFieldEnum: {
    tagId: 'tagId',
    taskId: 'taskId'
  };

  export type Tags_tasksScalarFieldEnum = (typeof Tags_tasksScalarFieldEnum)[keyof typeof Tags_tasksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Color'
   */
  export type EnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color'>
    


  /**
   * Reference to a field of type 'Color[]'
   */
  export type ListEnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: StringFilter<"task"> | string
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    dateTime?: DateTimeFilter<"task"> | Date | string
    duration?: IntFilter<"task"> | number
    finished?: BoolNullableFilter<"task"> | boolean | null
    createdAt?: DateTimeFilter<"task"> | Date | string
    updatedAt?: DateTimeFilter<"task"> | Date | string
    tags_tasks?: Tags_tasksListRelationFilter
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dateTime?: SortOrder
    duration?: SortOrder
    finished?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags_tasks?: tags_tasksOrderByRelationAggregateInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    dateTime?: DateTimeFilter<"task"> | Date | string
    duration?: IntFilter<"task"> | number
    finished?: BoolNullableFilter<"task"> | boolean | null
    createdAt?: DateTimeFilter<"task"> | Date | string
    updatedAt?: DateTimeFilter<"task"> | Date | string
    tags_tasks?: Tags_tasksListRelationFilter
  }, "id" | "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dateTime?: SortOrder
    duration?: SortOrder
    finished?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"task"> | string
    title?: StringWithAggregatesFilter<"task"> | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    dateTime?: DateTimeWithAggregatesFilter<"task"> | Date | string
    duration?: IntWithAggregatesFilter<"task"> | number
    finished?: BoolNullableWithAggregatesFilter<"task"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"task"> | Date | string
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    id?: StringFilter<"tag"> | string
    name?: StringFilter<"tag"> | string
    color?: EnumColorFilter<"tag"> | $Enums.Color
    tags_tasks?: Tags_tasksListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    tags_tasks?: tags_tasksOrderByRelationAggregateInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    name?: StringFilter<"tag"> | string
    color?: EnumColorFilter<"tag"> | $Enums.Color
    tags_tasks?: Tags_tasksListRelationFilter
  }, "id">

  export type tagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tag"> | string
    name?: StringWithAggregatesFilter<"tag"> | string
    color?: EnumColorWithAggregatesFilter<"tag"> | $Enums.Color
  }

  export type tags_tasksWhereInput = {
    AND?: tags_tasksWhereInput | tags_tasksWhereInput[]
    OR?: tags_tasksWhereInput[]
    NOT?: tags_tasksWhereInput | tags_tasksWhereInput[]
    tagId?: StringFilter<"tags_tasks"> | string
    taskId?: StringFilter<"tags_tasks"> | string
    task?: XOR<TaskRelationFilter, taskWhereInput>
    tag?: XOR<TagRelationFilter, tagWhereInput>
  }

  export type tags_tasksOrderByWithRelationInput = {
    tagId?: SortOrder
    taskId?: SortOrder
    task?: taskOrderByWithRelationInput
    tag?: tagOrderByWithRelationInput
  }

  export type tags_tasksWhereUniqueInput = Prisma.AtLeast<{
    tagId_taskId?: tags_tasksTagIdTaskIdCompoundUniqueInput
    AND?: tags_tasksWhereInput | tags_tasksWhereInput[]
    OR?: tags_tasksWhereInput[]
    NOT?: tags_tasksWhereInput | tags_tasksWhereInput[]
    tagId?: StringFilter<"tags_tasks"> | string
    taskId?: StringFilter<"tags_tasks"> | string
    task?: XOR<TaskRelationFilter, taskWhereInput>
    tag?: XOR<TagRelationFilter, tagWhereInput>
  }, "tagId_taskId">

  export type tags_tasksOrderByWithAggregationInput = {
    tagId?: SortOrder
    taskId?: SortOrder
    _count?: tags_tasksCountOrderByAggregateInput
    _max?: tags_tasksMaxOrderByAggregateInput
    _min?: tags_tasksMinOrderByAggregateInput
  }

  export type tags_tasksScalarWhereWithAggregatesInput = {
    AND?: tags_tasksScalarWhereWithAggregatesInput | tags_tasksScalarWhereWithAggregatesInput[]
    OR?: tags_tasksScalarWhereWithAggregatesInput[]
    NOT?: tags_tasksScalarWhereWithAggregatesInput | tags_tasksScalarWhereWithAggregatesInput[]
    tagId?: StringWithAggregatesFilter<"tags_tasks"> | string
    taskId?: StringWithAggregatesFilter<"tags_tasks"> | string
  }

  export type taskCreateInput = {
    id?: string
    title: string
    description?: string | null
    dateTime: Date | string
    duration: number
    finished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags_tasks?: tags_tasksCreateNestedManyWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    dateTime: Date | string
    duration: number
    finished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags_tasks?: tags_tasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_tasks?: tags_tasksUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags_tasks?: tags_tasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    dateTime: Date | string
    duration: number
    finished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagCreateInput = {
    id?: string
    name: string
    color: $Enums.Color
    tags_tasks?: tags_tasksCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    id?: string
    name: string
    color: $Enums.Color
    tags_tasks?: tags_tasksUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    tags_tasks?: tags_tasksUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    tags_tasks?: tags_tasksUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagCreateManyInput = {
    id?: string
    name: string
    color: $Enums.Color
  }

  export type tagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
  }

  export type tagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
  }

  export type tags_tasksCreateInput = {
    task: taskCreateNestedOneWithoutTags_tasksInput
    tag: tagCreateNestedOneWithoutTags_tasksInput
  }

  export type tags_tasksUncheckedCreateInput = {
    tagId: string
    taskId: string
  }

  export type tags_tasksUpdateInput = {
    task?: taskUpdateOneRequiredWithoutTags_tasksNestedInput
    tag?: tagUpdateOneRequiredWithoutTags_tasksNestedInput
  }

  export type tags_tasksUncheckedUpdateInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type tags_tasksCreateManyInput = {
    tagId: string
    taskId: string
  }

  export type tags_tasksUpdateManyMutationInput = {

  }

  export type tags_tasksUncheckedUpdateManyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Tags_tasksListRelationFilter = {
    every?: tags_tasksWhereInput
    some?: tags_tasksWhereInput
    none?: tags_tasksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tags_tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dateTime?: SortOrder
    duration?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dateTime?: SortOrder
    duration?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dateTime?: SortOrder
    duration?: SortOrder
    finished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type tagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type EnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type TaskRelationFilter = {
    is?: taskWhereInput
    isNot?: taskWhereInput
  }

  export type TagRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type tags_tasksTagIdTaskIdCompoundUniqueInput = {
    tagId: string
    taskId: string
  }

  export type tags_tasksCountOrderByAggregateInput = {
    tagId?: SortOrder
    taskId?: SortOrder
  }

  export type tags_tasksMaxOrderByAggregateInput = {
    tagId?: SortOrder
    taskId?: SortOrder
  }

  export type tags_tasksMinOrderByAggregateInput = {
    tagId?: SortOrder
    taskId?: SortOrder
  }

  export type tags_tasksCreateNestedManyWithoutTaskInput = {
    create?: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput> | tags_tasksCreateWithoutTaskInput[] | tags_tasksUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTaskInput | tags_tasksCreateOrConnectWithoutTaskInput[]
    createMany?: tags_tasksCreateManyTaskInputEnvelope
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
  }

  export type tags_tasksUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput> | tags_tasksCreateWithoutTaskInput[] | tags_tasksUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTaskInput | tags_tasksCreateOrConnectWithoutTaskInput[]
    createMany?: tags_tasksCreateManyTaskInputEnvelope
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tags_tasksUpdateManyWithoutTaskNestedInput = {
    create?: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput> | tags_tasksCreateWithoutTaskInput[] | tags_tasksUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTaskInput | tags_tasksCreateOrConnectWithoutTaskInput[]
    upsert?: tags_tasksUpsertWithWhereUniqueWithoutTaskInput | tags_tasksUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: tags_tasksCreateManyTaskInputEnvelope
    set?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    disconnect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    delete?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    update?: tags_tasksUpdateWithWhereUniqueWithoutTaskInput | tags_tasksUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: tags_tasksUpdateManyWithWhereWithoutTaskInput | tags_tasksUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
  }

  export type tags_tasksUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput> | tags_tasksCreateWithoutTaskInput[] | tags_tasksUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTaskInput | tags_tasksCreateOrConnectWithoutTaskInput[]
    upsert?: tags_tasksUpsertWithWhereUniqueWithoutTaskInput | tags_tasksUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: tags_tasksCreateManyTaskInputEnvelope
    set?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    disconnect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    delete?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    update?: tags_tasksUpdateWithWhereUniqueWithoutTaskInput | tags_tasksUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: tags_tasksUpdateManyWithWhereWithoutTaskInput | tags_tasksUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
  }

  export type tags_tasksCreateNestedManyWithoutTagInput = {
    create?: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput> | tags_tasksCreateWithoutTagInput[] | tags_tasksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTagInput | tags_tasksCreateOrConnectWithoutTagInput[]
    createMany?: tags_tasksCreateManyTagInputEnvelope
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
  }

  export type tags_tasksUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput> | tags_tasksCreateWithoutTagInput[] | tags_tasksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTagInput | tags_tasksCreateOrConnectWithoutTagInput[]
    createMany?: tags_tasksCreateManyTagInputEnvelope
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
  }

  export type EnumColorFieldUpdateOperationsInput = {
    set?: $Enums.Color
  }

  export type tags_tasksUpdateManyWithoutTagNestedInput = {
    create?: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput> | tags_tasksCreateWithoutTagInput[] | tags_tasksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTagInput | tags_tasksCreateOrConnectWithoutTagInput[]
    upsert?: tags_tasksUpsertWithWhereUniqueWithoutTagInput | tags_tasksUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: tags_tasksCreateManyTagInputEnvelope
    set?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    disconnect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    delete?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    update?: tags_tasksUpdateWithWhereUniqueWithoutTagInput | tags_tasksUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: tags_tasksUpdateManyWithWhereWithoutTagInput | tags_tasksUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
  }

  export type tags_tasksUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput> | tags_tasksCreateWithoutTagInput[] | tags_tasksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tags_tasksCreateOrConnectWithoutTagInput | tags_tasksCreateOrConnectWithoutTagInput[]
    upsert?: tags_tasksUpsertWithWhereUniqueWithoutTagInput | tags_tasksUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: tags_tasksCreateManyTagInputEnvelope
    set?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    disconnect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    delete?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    connect?: tags_tasksWhereUniqueInput | tags_tasksWhereUniqueInput[]
    update?: tags_tasksUpdateWithWhereUniqueWithoutTagInput | tags_tasksUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: tags_tasksUpdateManyWithWhereWithoutTagInput | tags_tasksUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
  }

  export type taskCreateNestedOneWithoutTags_tasksInput = {
    create?: XOR<taskCreateWithoutTags_tasksInput, taskUncheckedCreateWithoutTags_tasksInput>
    connectOrCreate?: taskCreateOrConnectWithoutTags_tasksInput
    connect?: taskWhereUniqueInput
  }

  export type tagCreateNestedOneWithoutTags_tasksInput = {
    create?: XOR<tagCreateWithoutTags_tasksInput, tagUncheckedCreateWithoutTags_tasksInput>
    connectOrCreate?: tagCreateOrConnectWithoutTags_tasksInput
    connect?: tagWhereUniqueInput
  }

  export type taskUpdateOneRequiredWithoutTags_tasksNestedInput = {
    create?: XOR<taskCreateWithoutTags_tasksInput, taskUncheckedCreateWithoutTags_tasksInput>
    connectOrCreate?: taskCreateOrConnectWithoutTags_tasksInput
    upsert?: taskUpsertWithoutTags_tasksInput
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutTags_tasksInput, taskUpdateWithoutTags_tasksInput>, taskUncheckedUpdateWithoutTags_tasksInput>
  }

  export type tagUpdateOneRequiredWithoutTags_tasksNestedInput = {
    create?: XOR<tagCreateWithoutTags_tasksInput, tagUncheckedCreateWithoutTags_tasksInput>
    connectOrCreate?: tagCreateOrConnectWithoutTags_tasksInput
    upsert?: tagUpsertWithoutTags_tasksInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutTags_tasksInput, tagUpdateWithoutTags_tasksInput>, tagUncheckedUpdateWithoutTags_tasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type NestedEnumColorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorWithAggregatesFilter<$PrismaModel> | $Enums.Color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColorFilter<$PrismaModel>
    _max?: NestedEnumColorFilter<$PrismaModel>
  }

  export type tags_tasksCreateWithoutTaskInput = {
    tag: tagCreateNestedOneWithoutTags_tasksInput
  }

  export type tags_tasksUncheckedCreateWithoutTaskInput = {
    tagId: string
  }

  export type tags_tasksCreateOrConnectWithoutTaskInput = {
    where: tags_tasksWhereUniqueInput
    create: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput>
  }

  export type tags_tasksCreateManyTaskInputEnvelope = {
    data: tags_tasksCreateManyTaskInput | tags_tasksCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type tags_tasksUpsertWithWhereUniqueWithoutTaskInput = {
    where: tags_tasksWhereUniqueInput
    update: XOR<tags_tasksUpdateWithoutTaskInput, tags_tasksUncheckedUpdateWithoutTaskInput>
    create: XOR<tags_tasksCreateWithoutTaskInput, tags_tasksUncheckedCreateWithoutTaskInput>
  }

  export type tags_tasksUpdateWithWhereUniqueWithoutTaskInput = {
    where: tags_tasksWhereUniqueInput
    data: XOR<tags_tasksUpdateWithoutTaskInput, tags_tasksUncheckedUpdateWithoutTaskInput>
  }

  export type tags_tasksUpdateManyWithWhereWithoutTaskInput = {
    where: tags_tasksScalarWhereInput
    data: XOR<tags_tasksUpdateManyMutationInput, tags_tasksUncheckedUpdateManyWithoutTaskInput>
  }

  export type tags_tasksScalarWhereInput = {
    AND?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
    OR?: tags_tasksScalarWhereInput[]
    NOT?: tags_tasksScalarWhereInput | tags_tasksScalarWhereInput[]
    tagId?: StringFilter<"tags_tasks"> | string
    taskId?: StringFilter<"tags_tasks"> | string
  }

  export type tags_tasksCreateWithoutTagInput = {
    task: taskCreateNestedOneWithoutTags_tasksInput
  }

  export type tags_tasksUncheckedCreateWithoutTagInput = {
    taskId: string
  }

  export type tags_tasksCreateOrConnectWithoutTagInput = {
    where: tags_tasksWhereUniqueInput
    create: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput>
  }

  export type tags_tasksCreateManyTagInputEnvelope = {
    data: tags_tasksCreateManyTagInput | tags_tasksCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type tags_tasksUpsertWithWhereUniqueWithoutTagInput = {
    where: tags_tasksWhereUniqueInput
    update: XOR<tags_tasksUpdateWithoutTagInput, tags_tasksUncheckedUpdateWithoutTagInput>
    create: XOR<tags_tasksCreateWithoutTagInput, tags_tasksUncheckedCreateWithoutTagInput>
  }

  export type tags_tasksUpdateWithWhereUniqueWithoutTagInput = {
    where: tags_tasksWhereUniqueInput
    data: XOR<tags_tasksUpdateWithoutTagInput, tags_tasksUncheckedUpdateWithoutTagInput>
  }

  export type tags_tasksUpdateManyWithWhereWithoutTagInput = {
    where: tags_tasksScalarWhereInput
    data: XOR<tags_tasksUpdateManyMutationInput, tags_tasksUncheckedUpdateManyWithoutTagInput>
  }

  export type taskCreateWithoutTags_tasksInput = {
    id?: string
    title: string
    description?: string | null
    dateTime: Date | string
    duration: number
    finished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type taskUncheckedCreateWithoutTags_tasksInput = {
    id?: string
    title: string
    description?: string | null
    dateTime: Date | string
    duration: number
    finished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type taskCreateOrConnectWithoutTags_tasksInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTags_tasksInput, taskUncheckedCreateWithoutTags_tasksInput>
  }

  export type tagCreateWithoutTags_tasksInput = {
    id?: string
    name: string
    color: $Enums.Color
  }

  export type tagUncheckedCreateWithoutTags_tasksInput = {
    id?: string
    name: string
    color: $Enums.Color
  }

  export type tagCreateOrConnectWithoutTags_tasksInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutTags_tasksInput, tagUncheckedCreateWithoutTags_tasksInput>
  }

  export type taskUpsertWithoutTags_tasksInput = {
    update: XOR<taskUpdateWithoutTags_tasksInput, taskUncheckedUpdateWithoutTags_tasksInput>
    create: XOR<taskCreateWithoutTags_tasksInput, taskUncheckedCreateWithoutTags_tasksInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutTags_tasksInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutTags_tasksInput, taskUncheckedUpdateWithoutTags_tasksInput>
  }

  export type taskUpdateWithoutTags_tasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taskUncheckedUpdateWithoutTags_tasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    finished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagUpsertWithoutTags_tasksInput = {
    update: XOR<tagUpdateWithoutTags_tasksInput, tagUncheckedUpdateWithoutTags_tasksInput>
    create: XOR<tagCreateWithoutTags_tasksInput, tagUncheckedCreateWithoutTags_tasksInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutTags_tasksInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutTags_tasksInput, tagUncheckedUpdateWithoutTags_tasksInput>
  }

  export type tagUpdateWithoutTags_tasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
  }

  export type tagUncheckedUpdateWithoutTags_tasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: EnumColorFieldUpdateOperationsInput | $Enums.Color
  }

  export type tags_tasksCreateManyTaskInput = {
    tagId: string
  }

  export type tags_tasksUpdateWithoutTaskInput = {
    tag?: tagUpdateOneRequiredWithoutTags_tasksNestedInput
  }

  export type tags_tasksUncheckedUpdateWithoutTaskInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type tags_tasksUncheckedUpdateManyWithoutTaskInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type tags_tasksCreateManyTagInput = {
    taskId: string
  }

  export type tags_tasksUpdateWithoutTagInput = {
    task?: taskUpdateOneRequiredWithoutTags_tasksNestedInput
  }

  export type tags_tasksUncheckedUpdateWithoutTagInput = {
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type tags_tasksUncheckedUpdateManyWithoutTagInput = {
    taskId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use taskDefaultArgs instead
     */
    export type taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = taskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tagDefaultArgs instead
     */
    export type tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tags_tasksDefaultArgs instead
     */
    export type tags_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tags_tasksDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}